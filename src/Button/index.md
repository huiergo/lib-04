---
nav:
  title: Components
  path: /components
group:
  title: components
---

## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'lib-04';
import GlobalConfig from '../GlobalConfig';

export default () => (
  <GlobalConfig globalColor="red">
    <Button className="self-btn" type="primary" style={{ fontSize: 16 }}>
      按钮1
    </Button>
  </GlobalConfig>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
