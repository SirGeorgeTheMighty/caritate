//component:

import { Button, TextInput } from 'flowbite-react';

export function Form() {
  return (
    <div className="flex flex-col space-y-3">
      <TextInput id="name" type="text" placeholder="Nume" />

      <TextInput id="prenume" type="text" placeholder="Prenume" />

      <TextInput id="email" type="email" placeholder="Email" />

      <TextInput id="phone" type="text" placeholder="Telefon" />

      <Button type="submit" color="dark">
        Doneaza
      </Button>
    </div>
  );
}
