import camelCase from 'lodash.camelcase'
import snakeCase from 'lodash.snakecase'

export function camelCaseKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) {
    return obj.map((v) => camelCaseKeys(v)) as unknown as T
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: Record<string, unknown> = {}
    for (const key in obj as Record<string, unknown>) {
      newObj[camelCase(key)] = camelCaseKeys(
        (obj as Record<string, unknown>)[key]
      )
    }
    return newObj as T
  }
  return obj as T
}

export function snakeCaseKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) {
    return obj.map((v) => snakeCaseKeys(v)) as unknown as T
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: Record<string, unknown> = {}
    for (const key in obj as Record<string, unknown>) {
      newObj[snakeCase(key)] = snakeCaseKeys(
        (obj as Record<string, unknown>)[key]
      )
    }
    return newObj as T
  }
  return obj as T
}
