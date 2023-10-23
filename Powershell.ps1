$resourceGroupName = "example-resource-group"
$location = "East US"
$storageAccountName = "examplestorageaccount"
$skuName = "Standard_LRS"

New-AzResourceGroup -Name $resourceGroupName -Location $location

New-AzStorageAccount `
  -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName $skuName `
  -Kind StorageV2 `
  -AccessTier Hot `
  -EnableHttpsTrafficOnly $true