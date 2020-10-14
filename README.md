Тестовое задание 1:

```javascript
function func(s, a, b) {
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s.substring(i, i + 1);
        if (c === a || c === b) return i;
    }
    return -1;
}
```

Тестовое задание 2:
