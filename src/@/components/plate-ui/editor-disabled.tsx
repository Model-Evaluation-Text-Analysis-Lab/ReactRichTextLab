'use client';

import { Plate } from '@udecode/plate-common';

import { BasicEditor } from './editor';

export function EditorDisabled() {
  return (
    <div className="mt-[1px] p-10">
      <Plate>
        <BasicEditor placeholder="Type your message here." disabled />
      </Plate>
    </div>
  );
}
