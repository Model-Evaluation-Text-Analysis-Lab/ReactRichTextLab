'use client';

import { createPlateUI } from '@/lib/create-plate-ui';
import { createBasicElementsPlugin } from '@udecode/plate-basic-elements';
import { createBasicMarksPlugin } from '@udecode/plate-basic-marks';
import { createPlugins, Plate } from '@udecode/plate-common';

import { BasicEditor } from './editor';
import { FloatingToolbar } from './floating-toolbar';
import { FloatingToolbarButtons } from './floating-toolbar-buttons';

import { createPluginFactory, HotkeyPlugin, onKeyDownToggleElement } from '@udecode/plate';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate';

export function EditorGhost() {
  const plugins = createPlugins(
    [createBasicElementsPlugin(), createBasicMarksPlugin()],
    { components: createPlateUI() }
  );

  return (
    <div className="mt-[72px] p-10">
      <Plate>
        <BasicEditor placeholder="Type your message here." variant="ghost" />

        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
      </Plate>
    </div>
  );
}
