// modules/Block/BlockComponent.tsx

import React from 'react';
import { Block } from './Block';
import Draggable from 'react-draggable';

interface BlockComponentProps {
  block: Block;
  onAddChild: (parent: Block) => void;
  onRemove: (block: Block) => void;
}

const BlockComponent: React.FC<BlockComponentProps> = ({ block, onAddChild, onRemove }) => {
  return (
    <Draggable>
        <div className="block">
        <div className="block-header">
            <strong>{block.titre}</strong>
            <button onClick={() => onAddChild(block)}>Add Child</button>
            <button onClick={() => onRemove(block)}>Remove</button>
        </div>
        <div className="block-children">
            {block.enfant.map((child) => (
            <BlockComponent
                key={child.id}
                block={child}
                onAddChild={onAddChild}
                onRemove={onRemove}
            />
            ))}
        </div>
        </div>
    </Draggable>
  );
};

export default BlockComponent;