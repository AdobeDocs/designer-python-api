---
title: Graph objects - Designer Python API
description: Substance 3D Designer - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Designer
  - Sample
---

Graph Objects
========================

This sample shows how to create graph object such as: Pins, Comments, Frames.
---

To use this example:

> 1. Open Designer
> 2. Go to Windows > Python Editor
> 3. Copy the code below inside the editor
> 4. Press the Play button

---

```python
import os
import sd
from sd.tools import io
from sd.ui.graphgrid import *
from sd.api.sbs.sdsbscompgraph import *
from sd.api.sdgraphobjectpin import *
from sd.api.sdgraphobjectframe import *
from sd.api.sdgraphobjectcomment import *

def main(aSDContext):
    cGridSize = GraphGrid.sGetFirstLevelSize()
    sbsPackageName = "MySample"  # Get the package name from the current python file base name

    # =========================================================================
    # Create a new Package
    sdPackageMgr = aSDContext.getSDApplication().getPackageMgr()
    sdPackage = sdPackageMgr.newUserPackage()

    # =========================================================================
    # Create a new Substance Compositing Graph in this package
    sdSBSCompGraph = SDSBSCompGraph.sNew(sdPackage)

    #   - Set the graph identifier
    sdSBSCompGraph.setIdentifier(sbsPackageName)


    # =========================================================================
    # Create new Pin
    sdGraphObjectPin = SDGraphObjectPin.sNew(sdSBSCompGraph)
    sdGraphObjectPin.setPosition(float2(2*cGridSize, 0))
    sdGraphObjectPin.setDescription('The Pin')

    # =========================================================================
    # Create a uniform color node
    sdSBSCompNodeUniform = sdSBSCompGraph.newNode('sbs::compositing::uniform')

    # =========================================================================
    # Create New Comment attached on a Node
    sdGraphObjectComment = SDGraphObjectComment.sNewAsChild(sdSBSCompNodeUniform)
    sdGraphObjectComment.setPosition(float2(-cGridSize*0.5, cGridSize*0.5))
    sdGraphObjectComment.setDescription('The Uniform node\'s comment')

    # =========================================================================
    # Create new Frame
    sdGraphObjectFrame = SDGraphObjectFrame.sNew(sdSBSCompGraph)
    sdGraphObjectFrame.setPosition(float2(-cGridSize, -cGridSize))
    sdGraphObjectFrame.setTitle('The Frame Title')
    sdGraphObjectFrame.setDescription('The frame description')
    sdGraphObjectFrame.setColor(ColorRGBA(0.2, 0.5, 0.7, 0.8))
    sdGraphObjectFrame.setSize(float2(2*cGridSize, 2*cGridSize))

if __name__ == '__main__':
    main(sd.getContext())
```