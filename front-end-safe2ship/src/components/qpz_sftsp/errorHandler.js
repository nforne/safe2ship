const errorHandler1 = (errorMessage) => {
  // error === {messages:[], messagesTracker:[]}
  const setTimouts = error.setTimouts
  const setTimoutsTracker = error.setTimoutsTracker
  if (!error.messagesTracker.includes(errorMessage)) {
    const newErrorSet = {
      messages:[...error.messages, <p key={`${error.messages.length + 1}`}>{errorMessage}</p>], 
      messagesTracker:[...error.messagesTracker, errorMessage]
    }
    setError((prev) => ({...prev, ...newErrorSet}));

    setTimoutsTracker[`${error.messages.length + 1}`] = errorMessage;
    setTimouts[`${error.messages.length + 1}`] = setTimeout(() => {
      const i = error.messages.indexOf(<p key={`${error.messages.length + 1}`}>{errorMessage}</p>);
      const j = error.messagesTracker.indexOf(errorMessage);
      const resetErrors = {messages:[...error.messages].splice(i,1), messagesTracker:[...error.messagesTracker].splice(j,1)}
      setError((prev) => ({...prev, ...resetErrors}));
      delete setTimoutsTracker[`${error.messages.length + 1}`];
      delete setTimouts[`${error.messages.length + 1}`];
    }, 10000);
    setTimouts[`${error.messages.length + 1}`]()
  } else {
    for (let i in setTimoutsTracker) {
      if (setTimoutsTracker.i === errorMessage) {
        clearTimeout(i);
        setTimouts[i]()
      }
    }

  }
}

//-----------------------------------------------------------------------------------------

const [errorstate, setErrorstate] = useState([]);

 const errorHandler2 = (errorMessage) => {

   const set = {timeout: '', then: 'this'};
   const timeoutHandler = (a) => {
     if (a === 1) {
        set['timeout'] = setTimeout(setError(() => []), 10000);
      } else if (a === 0) {
        const { timeout } = set;
        clearTimeout(timeout);
      }
    }

    if (!errorstate.includes(errorMessage)) {
      const msgCount = errorstate.length + 1;
      if (errorstate.length !== 0) timeoutHandler(0);
      setErrorstate((prev) => ([...prev, errorMessage]))
      setError((prev) => ([...prev, <p key={msgCount}>{errorMessage}</p>]));
    } else if (error.length !== 0 && errorstate.includes(errorMessage)) {
      timeoutHandler(0);
    }
    timeoutHandler(1)
  }