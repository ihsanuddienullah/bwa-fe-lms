import camelCase from 'lodash.camelcase'

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
