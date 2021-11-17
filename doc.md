Tarfish is a 2D esoteric programming language and Turing tarpit.

It has a few commands:
|Command | Action |
|--------|--------|
| <code>&nbsp;</code> | NOP |
| `>` | point right |
| `<` | point left |
| `^` | point up |
| `v` | point down |
| `;` | Halt |
| `x` | Push the x position of the IP |
| `y` | Push the y position of the IP |
| `=` | Pop two values, if they're equal, skip the next instruction. |
| `+` | Increment the top of the stack |
| `-` | Decrement the top of the stack |
| `{` | Shift the stack one unit to the right |
| `}` | Shift the stack one unit to the left |
| `.` | Output the top of stack as a character |
| `,` | Output the top of stack as a number |
| `?` | Take input - Lop the first character off if it's a string, pop entirely if it's a number |

## Examples

Hello, world!

```
>v
v>                                                                      x.
>v
v>                                                                                                   x.
>v
v>                                                                                                          x.
>v
v>                                                                                                          x.
>v
v>                                                                                                             x.
>v
v>                                          x.
>v
v>                              x.
>v
v>                                                                                     x.
>v
v>                                                                                                             x.
>v
v>                                                                                                                x.
>v
v>                                                                                                          x.
>v
v>                                                                                                  x.
>v
v>                               x.;
```
