import type { Course, Exercise } from './schema'

// Kontrola treści ponad schemat. Uruchamiana w testach i przez `npm run validate`.

export const POOL_SIZE = { min: 14, max: 16 }

function count(list: string[]): Map<string, number> {
  const m = new Map<string, number>()
  list.forEach((x) => m.set(x, (m.get(x) ?? 0) + 1))
  return m
}

export function validateExercise(e: Exercise): string[] {
  const issues: string[] = []
  const where = `${e.id} (${e.type})`
  switch (e.type) {
    case 'choose_translation':
      if (e.answer >= e.options.length) issues.push(`${where}: indeks odpowiedzi poza listą opcji`)
      if (new Set(e.options).size !== e.options.length) issues.push(`${where}: powtórzone opcje`)
      break
    case 'arrange_tiles': {
      const tiles = count(e.tiles)
      for (const [word, n] of count(e.answer)) {
        if ((tiles.get(word) ?? 0) < n) issues.push(`${where}: brak kafelka „${word}” potrzebnego w odpowiedzi`)
      }
      if (e.tiles.length <= e.answer.length) issues.push(`${where}: brak kafelków-dystraktorów`)
      break
    }
    case 'match_pairs': {
      const left = e.pairs.map((p) => p[0])
      const right = e.pairs.map((p) => p[1])
      if (new Set(left).size !== left.length || new Set(right).size !== right.length) issues.push(`${where}: niejednoznaczne pary`)
      break
    }
    case 'type_translation':
      if (new Set(e.accepted).size !== e.accepted.length) issues.push(`${where}: powtórzone warianty odpowiedzi`)
      break
  }
  return issues
}

export function validateContent(course: Course, exercises: Exercise[]): string[] {
  const issues: string[] = []
  const ids = count(exercises.map((e) => e.id))
  for (const [id, n] of ids) if (n > 1) issues.push(`${id}: powtórzone id`)
  exercises.forEach((e) => issues.push(...validateExercise(e)))

  const byId = new Map(exercises.map((e) => [e.id, e]))
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      const missing = lesson.exercisePool.filter((id) => !byId.has(id))
      if (missing.length) issues.push(`${lesson.id}: brak ćwiczeń ${missing.join(', ')}`)
    }
    if (unit.locked) continue
    // Lekcje z własną treścią: L1 i L2
    for (const lesson of unit.lessons.slice(0, 2)) {
      const pool = lesson.exercisePool.map((id) => byId.get(id)).filter((e): e is Exercise => !!e)
      if (pool.length < POOL_SIZE.min || pool.length > POOL_SIZE.max) {
        issues.push(`${lesson.id}: pula ma ${pool.length} ćwiczeń, a powinna ${POOL_SIZE.min}–${POOL_SIZE.max}`)
      }
      const types = new Set(pool.map((e) => e.type))
      if (types.size < 4) issues.push(`${lesson.id}: w puli są tylko typy ${[...types].join(', ')}`)
    }
  }

  const used = new Set(course.units.flatMap((u) => u.lessons.flatMap((l) => l.exercisePool)))
  exercises.filter((e) => !used.has(e.id)).forEach((e) => issues.push(`${e.id}: ćwiczenie nie należy do żadnej lekcji`))
  return issues
}
