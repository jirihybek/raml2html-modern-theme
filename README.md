# raml2html-modern-theme

Modern theme for raml2html utility.

Theme displays navigation tree on the left, documentation in the middle and type + curl examples on the right.

![Screenshot](https://github.com/jirihybek/raml2html-modern-theme/raw/master/screenshot.jpg)

## Custom Annotations

Theme supports the following annotations and displays them in a special way.

### deprecated

```yaml
# Definition
deprecated:
  displayName: Deprecated
  description: The method is deprecated.
  allowedTargets: [ Method ]
  type: nil

#Usage
(deprecated):
```

Applicable to a method. If used the `Deprecated` tag is displayed in the method description and also an icon in a method header.

### notImplemented

```yaml
# Definition
notImplemented:
  displayName: Not Implemented
  description: The functionality is not implemented.
  allowedTargets: [ Method ]
  type: nil

# Usage
(notImplemented):
```

Applicable to a method. If used the `Not implemented` tag is displayed in the method description and also an icon in a method header.

### experimental

```yaml
# Definition
experimental:
  displayName: Experimental
  description: The functionality is experimental.
  allowedTargets: [ Method ]
  type: nil

# Usage
(experimental):
```

Applicable to a method. If used the `Experimental` tag is displayed in the method description and also an icon in a method header.

### breakingChange

```yaml
# Definition
breakingChange:
  displayName: Breaking Change
  description: This method definition contains a breaking change.
  allowedTargets: [ Method ]
  type: nil

# Usage
(breakingChange):
```

Applicable to a method. If used the `Breaking Change` tag is displayed in the method description and also an icon in a method header.

### proposal

```yaml
# Definition
proposal:
  displayName: Proposal
  description: This method is a proposal.
  allowedTargets: [ Method ]
  type: nil

# Usage
(proposal):
```

Applicable to a method. If used the `Proposal` tag is displayed in the method description and also an icon in a method header.

### permissions

```yaml
# Definition
permissions:
  displayName: Permissions
  description: List of required permissions to access the endpoint
  type: array
  allowedTargets: [ Method ]

# Usage
(permissions):
  - READ
  - WRITE
  - DELETE
```

Applicable to a method. If used the special `Required permissions` block is displayed in a method description which enumarates specified items.

### docMenu

```yaml
# Definition
docMenu:
  displayName: Documentation Menu
  description: Configuration of the menu behaviour.
  allowedTargets: [ Resource ]
  type: object
  properties:
    expand:
      type: boolean
      description: If the current resource should be expanded in the menu.
      required: false
    root:
      type: boolean
      description: If the current resource should be at root level.
      required: false

# Usage
(docMenu):
  expand: true
  root: true
```

Applicable to a resource. When `expand` is true the resource will be expanded in the menu. When `root` is true the resource will be rendered at root level no matter what.

### docCategory

```yaml
# Definition
docCategory:
  displayName: Documentation Category
  description: Name of the category the current item should belong to.
  allowedTargets: [ TypeDeclaration ]
  type: string

# Usage
(docCategory): Errors
```

Applicable to a type declaration. If used the type will be rendered in the menu under given category.

## License

The MIT License (MIT)

Copyright (c) 2019 Jiri Hybek jiri@hybek.cz (jiri.hybek.cz)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
