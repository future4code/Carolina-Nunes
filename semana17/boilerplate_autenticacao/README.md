### Exercício 1

a) Acho que a utilização de strings permite que o id fique mais seguro do que números.

b) 
```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
```

### Exercício 2

