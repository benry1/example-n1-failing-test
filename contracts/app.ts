import { createExecutableFunctions, NApp } from "@n1xyz/nts-compiler";

class TestsFail extends NApp {
  count: number;
  
  async init() { 
    this.count = 0; 
  }
  
  async increment(by: number = 1) { 
    this.count += by; 
  }
  
  async getCount(): Promise<number> {
    return this.count;
  }
}

export const { init, increment, getCount } = createExecutableFunctions(TestsFail);
