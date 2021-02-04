function Button(props) {
  return <button>{props.children}</button>;
}

export default function ExampleChildrenProp() {
  return (
    <>
      <h1>Children Prop</h1>

      <Button>
        <span>Download</span>
      </Button>
    </>
  );
}
