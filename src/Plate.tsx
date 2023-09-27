import { Plate, PlateContent } from '@udecode/plate-common';
import { BasicEditor } from './@/components/plate-ui/editor';
import { EditorDefault } from './@/components/plate-ui/editordefault';
import { EditorGhost } from './@/components/plate-ui/editor-ghost';


export default function PlateEditor() {
  return (
    <Plate>
      <EditorDefault />
    </Plate>
  );
}
