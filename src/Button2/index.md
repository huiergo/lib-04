---
nav:
  title: Components
  path: /components
group:
  title: components
---

## Button2

Demo:

### 普通按钮

```tsx
import React from 'react';
import { Button2 } from 'lib-04';

export default () => (
  <Button2 text="按钮">
    <span>hello</span>
  </Button2>
);
```

### 高亮按钮

```tsx
import React from 'react';
import { Button2 } from 'lib-04';

export default () => (
  <Button2 text="按钮" type="highlight">
    <span>hello</span>
  </Button2>
);
```

### 禁用按钮

```tsx
import React from 'react';
import { Button2 } from 'lib-04';

export default () => (
  <Button2 text="按钮" disabled={true}>
    <span>hello</span>
  </Button2>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
