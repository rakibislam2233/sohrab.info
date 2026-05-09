"use client"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function ArticleEditor({ onChange, content }: { onChange?: (html: string)=>void, content?: string }){
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || '<p></p>',
    onUpdate: ({ editor }) => onChange?.(editor.getHTML())
  })

  return (
    <div>
      <div className="border rounded p-2 mb-3">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
