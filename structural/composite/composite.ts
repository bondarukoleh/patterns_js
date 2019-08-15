/*
Implementing a tree of text fields.
Field have a value - text.
Fields group - has a children array of fields
FieldComposite can get a has a array of children where can be fields and field groups.
 */

interface IField {
  getValue(): string
}

class Field implements IField {
  private value: string = `Value is ${Math.ceil(Math.random() * 100)} from Field \n`

  getValue(): string {
    return this.value
  }

  /* optionally we can define set/get Parent, if we want to have such ability */
}

class FieldGroup implements IField {
  readonly group: Array<IField> = []

  add(field: IField) {
    this.group.push(field)
    /* field.setParent(this) */
  }

  remove(field: IField) {
    this.group.splice(this.group.indexOf(field), 1)
    /* field.setParent(null) */
  }

  getValue(): string {
    let result: string = ''
    this.group.forEach(field => result += `${field.getValue()}`)
    return result + 'Added from field group \n';
  }
}

function compositeIt () {
  const tree = new FieldGroup();
  const branch1 = new FieldGroup();
  const field1 = new Field();
  const field2 = new Field();
  const field3 = new Field();
  branch1.add(field1);
  branch1.add(field2);
  tree.add(branch1);
  tree.add(field3);
  console.log(tree.getValue());
}

compositeIt()

