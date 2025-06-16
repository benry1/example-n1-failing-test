// Auto-generated from idl.json
export type ContractIDL = {
  actions: {
    init: () => void,
    increment: (by: number) => void,
    getCount: () => Promise<number>
  },
  state: {
    count: "number"
  }
};
export const IDL = {
  actions: {
    init: "() => void",
    increment: "(by: number) => void",
    getCount: "() => Promise<number>"
  },
  state: {
    count: "number"
  }
};
