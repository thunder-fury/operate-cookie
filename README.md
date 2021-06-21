# @thunder_fury/thunder-cookie
 A simple library for adding, removing and retrieving browser cookies

## install
```
  $ npm i -D @thunder_fury/operate-cookie
  $ npm i @thunder_fury/operate-cookie
```
## import
```ts
const { OperateCookie } = require('@thunder_fury/operate-cookie');
//OR
import { OperateCookie } from '@thunder_fury/operate-cookie';
```
## Method


|  Method  |  Description  |
| ---- | ---- |
|  add  |  Add cookie  |
|  get  |  Get cookie  |
|  addParms  |  Add parameter cookie  |
|  remove  |  remove cookie |

---
## Example of use

```ts
const operateCookie = new OperateCookie
```

### set cookie
```ts
  operateCookie.add(key, value, maxAge)
```
Set the method arguments in the order of key, value, maxAge.

---

### get cookie
```ts
  operateCookie.get(key)
```
Set the key of the cookie you want to get in the parameter of method as a character string

---

### remove cookie
```ts
  operateCookie.remove(key)
```

Pass the cookie you want to get as a string in the argument of method

---
### set parms cookie
```ts
  operateCookie.addParms()
```
For example, if you set the `key=value` parameter to a URL like this, you can just call the method and the value will be stored in the key in the browser cookie.
