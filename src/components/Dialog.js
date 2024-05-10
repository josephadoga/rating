
function Dialog(props) {
  if (!props.show) {
    return <></>;
  }
  return (
    <div className='dialog center'>
      <img 
        src={props.dialogIcon} 
        alt='Dialog Icon' 
      />
      <button className='close' onClick={props.close}>
        Close Dialog
      </button>
    </div>
  )
}

export default Dialog;