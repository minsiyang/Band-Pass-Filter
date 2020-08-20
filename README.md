# Review 2

- bandPassFilter (method name)
- array of frequencies, each element would be an integer
- only allow range. bottom and top of allow range 
- 3 arguements provided, the frequecies, low-range, high-range

```
example input 
[10,45,100,1001],40,1000 --> [40,45,100,1000]
```

- iterate through the frequency array
- compare each element with low-range arguement, if it is lower than the low-range arguement, the element would be replace by the low-range
- compare each element with high-range argument, if it is higher than the high-range arguement, the element would be replace by the high-range
- compare each element, if it is between the range, it will be store in the array.

|  input   |   output  | 
| :--:     |  :--:     |
|  [10]    |     [40]      |
|   [10, 10] |   [40, 40]   |
|[1001]      |   [1000]     |
| [1001, 1001] |   [1000, 1000] |
| [45]        |   [45]         |
