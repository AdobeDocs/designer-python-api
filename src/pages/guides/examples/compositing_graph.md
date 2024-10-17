---
title: Substance compositing graph creation - Designer Python API
description: Substance 3D Designer - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Designer
  - Sample
---

Substance compositing graph creation
========================

This sample shows how to create a simple Substance Compositing Graph that uses:
- two Uniform Colors
- a Noise
- a Blend Node
- an Output Node
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
from sd.api.sdapplication import *
from sd.ui.graphgrid import *
from sd.api.sbs.sdsbscompgraph import *
from sd.api.sdvaluecolorrgba import *
from sd.api.sdvalueusage import *
from sd.api.sdvaluearray import *
from sd.api.sdvaluestruct import *
from sd.api.sdvaluefloat import *
from sd.api.sdvalueint import *

from sd.api.sdtypeusage import *
from sd.api.sdresourcebitmap import *
from sd.api.sdtypestruct import *
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
    sdSBSCompNodeUniform1 = sdSBSCompGraph.newNode('sbs::compositing::uniform')

    #   - Set the position of the uniform node
    sdSBSCompNodeUniform1.setPosition(float2(-2*cGridSize, -2*cGridSize))

    #   - Set the inheritance mode of the '$format' property to absolute
    sdSBSCompNodeUniform1.setInputPropertyInheritanceMethodFromId('$format', SDPropertyInheritanceMethod.Absolute)

    #   - Change the Output format of the '$format' property to 'hdr_high_precision'
    sdSBSCompNodeUniform1.setInputPropertyValueFromId('$format', SDValueEnum.sFromValueId('sbs::compositing::format', 'hdr_high_precision'))

    #   - Change the color property of this node
    #       - Create the value color. The SDValueColorRGBA embeds the base type value of type ColorRGBA
    sdValueColorRGBA = SDValueColorRGBA.sNew(ColorRGBA(0.8, 0.35, 0.0, 1.0))
    #       - Set the color value to the 'outputcolor' input property of the node
    sdSBSCompNodeUniform1.setInputPropertyValueFromId('outputcolor', sdValueColorRGBA)
	
	 
	 # =========================================================================
    # Create a second uniform color node
    sdSBSCompNodeUniform2 = sdSBSCompGraph.newNode('sbs::compositing::uniform')

    #   - Set the position of the uniform node
    sdSBSCompNodeUniform2.setPosition(float2(-2*cGridSize, 0))

    #   - Set the inheritance mode of the '$format' property to absolute
    sdSBSCompNodeUniform2.setInputPropertyInheritanceMethodFromId('$format', SDPropertyInheritanceMethod.Absolute)

    #   - Change the Output format of the '$format' property to 'hdr_high_precision'
    sdSBSCompNodeUniform2.setInputPropertyValueFromId('$format', SDValueEnum.sFromValueId('sbs::compositing::format', 'hdr_high_precision'))

    #   - Change the color property of this node
    #       - Create the value color. The SDValueColorRGBA embeds the base type value of type ColorRGBA
    sdValueColorRGBA = SDValueColorRGBA.sNew(ColorRGBA(0.8, 0.8, 0.0, 1.0))
    #       - Set the color value to the 'outputcolor' input property of the node
    sdSBSCompNodeUniform2.setInputPropertyValueFromId('outputcolor', sdValueColorRGBA)
	
    # =========================================================================
    # Create a noise node
    resourcePath = aSDContext.getSDApplication().getPath(SDApplicationPath.DefaultResourcesDir)
    sdPackageNoise = sdPackageMgr.loadUserPackage(os.path.join(resourcePath, 'packages', 'grunge_rust_fine.sbs'), True)
    sdSBSCompNodeNoise = sdSBSCompGraph.newInstanceNode(sdPackageNoise.findResourceFromUrl('grunge_rust_fine'))
    #   - Set the position of the noise node
    sdSBSCompNodeNoise.setPosition(float2(-2*cGridSize, 2*cGridSize))

   
    # =========================================================================
    # Create a blend Node
    sdSBSCompNodeBlend = sdSBSCompGraph.newNode('sbs::compositing::blend')
    #   - Set the position of the blend node
    sdSBSCompNodeBlend.setPosition(float2(0, 0))

    # =========================================================================
    # Create an output Node
    sdSBSCompNodeOutput = sdSBSCompGraph.newNode('sbs::compositing::output')
    #   - Set the position of the output node
    sdSBSCompNodeOutput.setPosition(float2(2*cGridSize, 0))
    #   - Add one usage 'baseColor' to the output node
    #       The usages of an output (or input node) are define from/to an array.
    #       - Create an array value of usages (of undefined size)
    sdValueArray = SDValueArray.sNew(SDTypeUsage.sNew(), 0)
    #       - Create an usage value that embed the usage to add to the node
    sdValueUsage = SDValueUsage.sNew(SDUsage.sNew('baseColor', 'RGBA', 'sRGB'))
    #       - Add the usage value to the array
    sdValueArray.pushBack(sdValueUsage)
    #       - Set the value array to the 'usages' annotation of the output node
    sdSBSCompNodeOutput.setAnnotationPropertyValueFromId('usages', sdValueArray)

    # =========================================================================
    # Create connections
    #   - Connect the first uniform node to the Blend node
    #       - 'unique_filter_output': The identifier of the output property of the Uniform Node.
    #           This property is Connectable (i.e. SDProperty.isConnectable() is True), it means that a Connector is displayed for this property in the graph,
    #           and a connection can be defined from/to this property.
    #       - 'sdSBSCompNodeBlend': This is the other Node to connect
    #       - 'source': This is the input property of the other Node
    sdSBSCompNodeUniform1.newPropertyConnectionFromId('unique_filter_output', sdSBSCompNodeBlend, 'source')

    #   - Connect the second Uniform node to the Blend node
    #       - 'unique_filter_output': The identifier of the output property of the Uniform Node.
    #           This property is Connectable (i.e. SDProperty.isConnectable() is True), it means that a Connector is displayed for this property in the graph,
    #           and a connection can be defined from/to this property.
    #       - 'sdSBSCompNodeBlend': This is the other Node to connect
    #       - 'destination': This is the input property of the other Node
    sdSBSCompNodeUniform2.newPropertyConnectionFromId('unique_filter_output', sdSBSCompNodeBlend, 'destination')
	
	    #   - Connect the Noise node to the Blend node
    #       - 'output': The identifier of the output property of the Node.
    #           This property is Connectable (i.e. SDProperty.isConnectable() is True), it means that a Connector is displayed for this property in the graph,
    #           and a connection can be defined from/to this property.
    #       - 'sdSBSCompNodeBlend': This is the other Node to connect
    #       - 'opacity': This is the input property of the other Node
    sdSBSCompNodeNoise.newPropertyConnectionFromId('output', sdSBSCompNodeBlend, 'opacity')

    #   - Connect the Blend node to the output node
    #       - 'unique_filter_output': The identifier of the output property of the Blend Node.
    #           This property is Connectable (i.e. SDProperty.isConnectable() is True), it means that a Connector is displayed for this property in the graph,
    #           and a connection can be defined from/to this property.
    #       - 'sdSBSCompNodeOutput': This is the other Node to connect
    #       - 'inputNodeOutput': This is the input property of the other Node
    sdSBSCompNodeBlend.newPropertyConnectionFromId('unique_filter_output', sdSBSCompNodeOutput, 'inputNodeOutput')

if __name__ == '__main__':
    main(sd.getContext())
```