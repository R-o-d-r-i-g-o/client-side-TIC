import { InputField, Input } from './styles.d';

export const TextInput = ({label, icon, type}) => {
    return(
      <InputField>
        <i className={icon}></i>
        <Input type={type} placeholder={label}/>
      </InputField>
    );
}