import { useContext, useState, useEffect } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Fully wired up with Edit/Delete functionality
export function QuestionItem({ question }) {
  const { state, dispatch } = useContext(SurveyContext);

  // Controlled form state for the main question text
  const [workingText, setWorkingText] = useState(question.question);

  // Track individual multiple-choice option editing inline
  const [editingOptionIndex, setEditingOptionIndex] = useState(null);
  const [optionWorkingText, setOptionWorkingText] = useState('');

  const isEditing = state.ui.editingQuestionId === question.id;

  // Keep local working text synchronized if the parent state changes
  useEffect(() => {
    setWorkingText(question.question);
  }, [question.question]);

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: question.id,
    });
  };

  const handleCancel = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: null,
    });
    setWorkingText(question.question); // Revert to original text on cancel
  };

  const handleSave = () => {
    if (!workingText.trim()) return;
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText.trim() },
    });
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: null,
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  const handleEditOption = (index) => {
    setEditingOptionIndex(index);
    setOptionWorkingText(question.options[index]);
  };

  const handleSaveOption = () => {
    if (!optionWorkingText.trim()) return;
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: editingOptionIndex,
        newText: optionWorkingText.trim(),
      },
    });
    setEditingOptionIndex(null);
    setOptionWorkingText('');
  };

  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: question.id, optionIndex: index },
    });
  };

  const handleAddOption = () => {
    const newOption = prompt('Enter new option text:');
    if (newOption && newOption.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: { questionId: question.id, optionText: newOption.trim() },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          <button
            className={styles['edit-btn']}
            onClick={isEditing ? handleCancel : handleEdit}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className={styles['edit-form']}>
          <div className={styles['form-group']}>
            <label>Question Text:</label>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
              className={styles['form-input']}
              autoFocus
            />
          </div>
          <div className={styles['form-actions']}>
            <button className={styles['save-btn']} onClick={handleSave}>
              Save
            </button>
            <button className={styles['cancel-btn']} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
        </div>
      )}

      {/* Render options section only when it's a multiple choice question */}
      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options?.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {editingOptionIndex === index ? (
                  <div className={styles['option-edit-form']}>
                    <input
                      type="text"
                      value={optionWorkingText}
                      onChange={(e) => setOptionWorkingText(e.target.value)}
                      className={styles['option-input']}
                      autoFocus
                    />
                    <button
                      className={styles['save-btn']}
                      onClick={handleSaveOption}
                    >
                      Save
                    </button>
                    <button
                      className={styles['cancel-btn']}
                      onClick={() => setEditingOptionIndex(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className={styles['option-display']}>
                    <span className={styles['option-text']}>{option}</span>
                    <div className={styles['option-actions']}>
                      <button
                        className={styles['edit-option-btn']}
                        onClick={() => handleEditOption(index)}
                      >
                        Edit
                      </button>
                      <button
                        className={styles['delete-option-btn']}
                        onClick={() => handleDeleteOption(index)}
                        disabled={question.options.length <= 2}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button
            className={styles['add-option-btn']}
            onClick={handleAddOption}
          >
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
}
