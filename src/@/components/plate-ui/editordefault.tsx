'use client';

import { createPlateUI } from '@/lib/create-plate-ui';
import { createBasicElementsPlugin } from '@udecode/plate-basic-elements';
import { createBasicMarksPlugin } from '@udecode/plate-basic-marks';
import { createPlugins, Plate } from '@udecode/plate-common';

import { BasicEditor } from './editor';
import { FloatingToolbar } from './floating-toolbar';
import { FloatingToolbarButtons } from './floating-toolbar-buttons';

import { createDndPlugin } from '@udecode/plate-dnd';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import { withDraggables } from './with-draggables';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function EditorDefault() {
  const plugins = createPlugins(
    [createBasicElementsPlugin(),
       createBasicMarksPlugin(),
       createDndPlugin({ options: { enableScroller: true } }),
       createNodeIdPlugin()],
    { components: withDraggables(createPlateUI()) }
  );

  return (
    <div className="mt-[72px] p-10">
      <DndProvider backend={HTML5Backend}>
        <Plate plugins={plugins}>
          <BasicEditor placeholder="This is the default plate editor..." />

          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
        </Plate>
      </DndProvider>
    </div>
  );
}
