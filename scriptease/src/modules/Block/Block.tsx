// modules/Block/Block.ts

export class Block {
  id: number;
  titre: string;
  parent: Block | null;
  enfant: Block[];

  constructor(id: number, titre: string, parent: Block | null, enfant: Block[]) {
    this.id = id;
    this.titre = titre;
    this.parent = parent;
    this.enfant = enfant;
  }

  addChild(block: Block) {
    this.enfant.push(block);
  }

  removeChild(blockId: number) {
    this.enfant = this.enfant.filter((child) => child.id !== blockId);
  }
}