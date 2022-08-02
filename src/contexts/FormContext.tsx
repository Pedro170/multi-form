import React from 'react'

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

type Action = {
  type: FormActions;
  payload: any;
}

type ContextType = {
  state: State;
  dispatch: ( action: Action ) => void;
}

type FormProviderProps = {
  children: React.ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
}

// Context
const FormContext = React.createContext< ContextType | null >( null )

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = ( state: State, action: Action ) => {
  switch( action.type ) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
}

// Provider
export const FormStorage = ( { children }: FormProviderProps ) => {
  const [ state, dispatch ] = React.useReducer( formReducer, initialData )
  const value = { state, dispatch }
  return(
    <FormContext.Provider value={ value }>
      { children }
    </FormContext.Provider>
  )
}

// Hook

export const useForm = () => {
  const context = React.useContext( FormContext )
  if ( context === null ) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }

  return context;
}

// interface FormContexts {
//   step: number;
//   name: string,
//   level: string,
//   email: string,
//   github: string,
// }

// export const FormContext = React.createContext<FormContexts | null>( null );

// export const FormStorage = ( { children }: any ) => {
//   const [ data, setData ] = React.useState({
//     step: 0,
//     name: '',
//     level: '',
//     email: '',
//     github: '',
//   })


//   return (
//     <FormContext.Provider
//       value={ data }
//     >
//       { children }
//     </FormContext.Provider>
//   )
// }
