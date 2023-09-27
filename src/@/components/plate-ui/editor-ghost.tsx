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



const createBlockquotePlugin = createPluginFactory<HotkeyPlugin>({
  key: ELEMENT_BLOCKQUOTE,  // Use the blockquote element type
  isElement: true,
  handlers: {
    // Check for the hotkey on keydown
    onKeyDown: onKeyDownToggleElement,
  },
  options: {
    // Define the hotkeys here
    hotkey: ['mod+opt+B', 'mod+shift+B'],  // Use whatever hotkey combination you prefer
  },
});

// Usage:
const blockquotePlugin = createBlockquotePlugin();



export function EditorGhost() {
  const plugins = createPlugins(
    [createBasicElementsPlugin(), createBasicMarksPlugin(), blockquotePlugin],
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
