class LFUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.keyToNode = new Map();
      this.freqToKeys = new Map();
      this.minFreq = 0;
    }
  
    get(key) {
      if (!this.keyToNode.has(key)) return -1;
  
      const { value, freq } = this.keyToNode.get(key);
      this._updateFreq(key, value, freq);
      return value;
    }
  
    put(key, value) {
      if (this.capacity === 0) return;
  
      if (this.keyToNode.has(key)) {
        const { freq } = this.keyToNode.get(key);
        this._updateFreq(key, value, freq);
      } else {
        if (this.keyToNode.size >= this.capacity) {
          const keysWithMinFreq = this.freqToKeys.get(this.minFreq);
          const leastUsedKey = keysWithMinFreq.keys().next().value;
          keysWithMinFreq.delete(leastUsedKey);
          if (keysWithMinFreq.size === 0) {
            this.freqToKeys.delete(this.minFreq);
          }
          this.keyToNode.delete(leastUsedKey);
        }
  
        // Insert new key with freq 1
        this.keyToNode.set(key, { value, freq: 1 });
        if (!this.freqToKeys.has(1)) {
          this.freqToKeys.set(1, new Map());
        }
        this.freqToKeys.get(1).set(key, true);
        this.minFreq = 1;
      }
    }
  
    _updateFreq(key, value, freq) {
      // Remove from old freq
      const keys = this.freqToKeys.get(freq);
      keys.delete(key);
      if (keys.size === 0) {
        this.freqToKeys.delete(freq);
        if (this.minFreq === freq) {
          this.minFreq += 1;
        }
      }
  
      // Add to new freq
      const newFreq = freq + 1;
      if (!this.freqToKeys.has(newFreq)) {
        this.freqToKeys.set(newFreq, new Map());
      }
      this.freqToKeys.get(newFreq).set(key, true);
      this.keyToNode.set(key, { value, freq: newFreq });
    }
  }
  