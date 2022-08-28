---
nav:
  title: Components
  path: /components
group:
  title: components
---

## Button1

### 基本使用

#### 普通按钮

```tsx
import React from 'react';
import { Button1 } from 'lib-04';
import { SettingOutlined, StarOutlined, DeleteOutlined, PoweroffOutlined } from '@ant-design/icons';

export default () => (
  <Button1
    type="primary"
    style={{ width: 200 }}
    text="您好"
    onClick={() => console.log('click it')}
    // icon={<img src="https://avatars.githubusercontent.com/u/5318333?s=40&v=4" />}
  >
    primary按钮
  </Button1>
);
```

#### 带 icon 按钮

```tsx
import React from 'react';
import { Button1 } from 'lib-04';
import { SettingOutlined, StarOutlined, DeleteOutlined, PoweroffOutlined } from '@ant-design/icons';

export default () => (
  <Button1 type="primary" style={{ width: 200 }} icon={<DeleteOutlined />}>
    图标按钮
  </Button1>
);
```

#### pending 按钮

```tsx
import React from 'react';
import { Button1 } from 'lib-04';

export default () => (
  <Button1 type="primary" style={{ width: 200 }} loading={true}>
    pending按钮
  </Button1>
);
```

#### 禁用按钮

```tsx
import React from 'react';
import { Button1 } from 'lib-04';

export default () => (
  <Button1 type="primary" style={{ width: 200 }} disabled>
    disabled按钮
  </Button1>
);
```

<API src="./index.tsx"></API>

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

<!--
// Button:
// 	（通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。
// ）

// 	type: 按钮类型： primary | ghost | dashed | link | text | default
// 	danger: 是否是危险
// 	disabled: 不可点击
// 	href 点击跳转地址
// 	icon 图标组件
// 	onClick 回调函数 -->
