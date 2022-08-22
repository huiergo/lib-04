---
nav:
  title: 组件
  path: /components
group:
  title: components
---

## Message

<code src="./demo/basic.tsx"></code>

### 基本用法:

```tsx
import React from 'react';
import { Message } from 'lib-04';

export default () => (
  <Message kind="warning" theme="green">
    这是一条警示
  </Message>
);
```

<API src="./index.tsx"></API>

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
