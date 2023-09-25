'use client';

import { createPlateUI } from '@/lib/create-plate-ui';
import { createBasicElementsPlugin } from '@udecode/plate-basic-elements';
import { createBasicMarksPlugin } from '@udecode/plate-basic-marks';
import { createPlugins, Plate } from '@udecode/plate-common';

import { BasicEditor } from './editor';
import { FloatingToolbar } from './floating-toolbar';
import { FloatingToolbarButtons } from './floating-toolbar-buttons';

export function EditorDefault() {
  const plugins = createPlugins(
    [createBasicElementsPlugin(), createBasicMarksPlugin()],
    { components: createPlateUI() }
  );

  return (
    <div className="mt-[72px] p-10">
      <Plate plugins={plugins}>
        <BasicEditor placeholder="This is the default plate editor..." />

        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
      </Plate>
    </div>
  );
}
