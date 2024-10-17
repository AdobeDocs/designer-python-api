---
title: Parameter controled by a function - Designer Python API
description: Substance 3D Designer - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Designer
  - Sample
---

Parameter controled by a function
========================

This sample shows how to setup a parameter that is controled by a function on a uniform node in a Substance Compositing graph.
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
from sd.api.sdbasetypes import *
from sd.api.sdvaluefloat4 import *

def main(aSDContext):
     cGridSize = GraphGrid.sGetFirstLevelSize()
    sbsPackageName = "MySample"

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
    # Create a uniform color node
    sdSBSCompNodeUniform = sdSBSCompGraph.newNode('sbs::compositing::uniform')
    sdSBSCompNodeUniform.setPosition(float2(-2*cGridSize, cGridSize))

    #   - Get the input property that controls the output color
    uniformNodePropertyOutputColor = sdSBSCompNodeUniform.getPropertyFromId('outputcolor', SDPropertyCategory.Input)

    #   - Create a new property graph of type SDSBSFunctionGraph
    propertySBSFunctionGraph = sdSBSCompNodeUniform.newPropertyGraph(uniformNodePropertyOutputColor, 'SDSBSFunctionGraph')

    #   - Fill the property function. Here create a simple constant node that will return a green value
    float4ConstantNode = propertySBSFunctionGraph.newNode('sbs::function::const_float4')
    float4ConstantNode.setInputPropertyValueFromId('__constant__', SDValueFloat4.sNew(float4(0, 1, 0, 1)))

    # Set the constant node as output of the property's SBSFunctionGraph
    propertySBSFunctionGraph.setOutputNode(float4ConstantNode, True)

if __name__ == '__main__':
    main(sd.getContext())
```