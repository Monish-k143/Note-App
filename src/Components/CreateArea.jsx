import { useState } from "react";
import PropTypes from 'prop-types';

function CreateArea(props) {
    
  const [isExpand, setIsExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setIsExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        
        <button onClick={submitNote}>+</button>
        
      </form>
    </div>
  );
}

CreateArea.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

export default CreateArea;
