function Button(props) {
    
    const ButtonTag = props.href ? 'a' : 'button';

return (
  <ButtonTag href={props.href} >{props.label}</ButtonTag>
  );
}
