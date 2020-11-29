import React from 'react'
import { Editor, EditorState} from 'draft-js';

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  render() {
    return(
      <div>
        <Editor 
          editorState={this.state.editorState} 
        />
      </div>
    )
  }
}

export default PageContainer