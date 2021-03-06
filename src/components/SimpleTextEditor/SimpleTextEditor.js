import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  TextField,
  ClickAwayListener
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
  },
  input: {
    backgroundColor: theme.palette.common.white
  },
  actions: {
    marginTop: theme.spacing(1)
  },
  saveButton: {
    marginRight: theme.spacing(1)
  }
}))

const SimpleTextEditor = props => {
  const {
    className,
    inputText,
    onSave,
    onClose,
    TextFieldProps,
    ...otherOptions
  } = props
  const classes = useStyles()
  const inputRef = useRef()
  const [text, setText] = useState(inputText)

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.selectionStart = inputText.length
    inputRef.current.selectionEnd = inputText.length
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = event => {
    const value = event.target.value
    setText(value)
  }

  const handlerSave = () => {
    onSave(text)
  }

  const handlerCancel = () => {
    onClose()
  }

  const handleClickAway = () => {
    onClose()
  }

  const disableSave = () => text ? false : true

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={clsx(classes.root, className)} {...otherOptions}>
        <TextField
          className={classes.input}
          {...TextFieldProps}
          fullWidth
          rowsMax={3}
          variant="outlined"
          onChange={handleChange}
          name="text"
          value={text}
          inputRef={inputRef}
        />
        <div className={classes.actions}>
          <Button
            className={classes.saveButton}
            variant="contained"
            color="primary"
            onClick={handlerSave}
            disabled={disableSave()}
          >
            Salvar
          </Button>
          <Button onClick={handlerCancel}>Cancelar</Button>
        </div>
      </div>
    </ClickAwayListener>
  )
}

SimpleTextEditor.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  inputText: PropTypes.string,
  TextFieldProps: PropTypes.object,
}

export default SimpleTextEditor
