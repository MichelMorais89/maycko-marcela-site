Quiet text input. `box` (soft bordered) or `line` (minimal bottom rule). Focus brings a gold underline / soft gold ring.

```jsx
<Input placeholder="nome@empresa.com" />
<Input variant="line" placeholder="Seu nome" size="lg" />
<Input invalid defaultValue="errado" />
```

- Use inside a `Field` for labelling. `line` suits elegant, sparse forms; `box` for denser ones.
