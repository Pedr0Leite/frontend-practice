interface PersistentStorage{
    getItem(key: string): string | null
    setItem(key: string, value: object): void
}

class LocalStorage implements PersistentStorage {
    getItem(key: string) {
        const item = localStorage.getItem(key)
    
        if (item === null) return undefined
        if (item === "null") return null
        if (item === "undefined") return undefined
    
        try {
          return JSON.parse(item)
        } catch {}
    
        return item
      }

      setItem(key: string, value: object) {
        if (value === undefined) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, JSON.stringify(value))
        }
      } 
}

class MockStorage implements PersistentStorage {
    getItem() {
      return null
    }
    setItem() {}
  }

export const persistentStorage = window?.localStorage ? new LocalStorage() : new MockStorage();