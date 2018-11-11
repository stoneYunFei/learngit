  Java SDK.md 

Java SDK
========

这里介绍TImo Java SDK的用法，使开发者更方便操作TImo区块链。

Java 环境
=======

编译环境不低于Java 1.7.

目录
==

*   [生成SDK实例](#-sdk-)
*   [账户服务](#-addresscommand-)
    *   [addNewAddr](#addnewaddr)
    *   [setupMulti](#setupmulti)
    *   [addMultiAddr](#addmultiaddr)
    *   [importPrivateKey](#importprivatekey)
    *   [showPrivateKey](#showprivatekey)
    *   [importAddress](#importaddress)
    *   [validateAddress](#validateaddress)
    *   [showAddresses](#showaddresses)
    *   [setupKeyPairs](#setupkeypairs)
    *   [showAllBals](#showallbals)
    *   [showAddrBals](#showaddrbals)
*   [资产服务](#-assetcommand-)
    *   [showAssets](#showassets)
    *   [showAssetDeals](#showassetdeals)
    *   [sell](#sell)
    *   [sellfrom](#sellfrom)
    *   [sellAsset](#sellasset)
*   [区块服务](#-blockcommand-)
    *   [showBestBlockHash](#showbestblockhash)
    *   [showBlock](#showblock)
    *   [showBlockCount](#showblockcount)
    *   [showBlockHash](#showblockhash)
*   [数据模块服务](#-datamodcommand-)
    *   [setupDataMod](#setupdatamod)
    *   [order](#order)
    *   [noOrder](#noorder)
    *   [sendItem](#senditem)
    *   [sendItemFrom](#senditemfrom)
    *   [showDataItem](#showdataitem)
    *   [showDataItems](#showdataitems)
    *   [showDataItemsByKey](#showdataitemsbykey)
    *   [showDataSenderItems](#showdatasenderitems)
    *   [showDataSenders](#showdatasenders)
    *   [showDataTxItems](#showdatatxitems)
    *   [showDataKeys](#showdatakeys)
    *   [showDataKeySumm](#showdatakeysumm)
    *   [showDataSenderSumm](#showdatasendersumm)
*   [转账服务](#-sendcommand-)
    *   [send](#send)
    *   [sendFrom](#sendfrom)
    *   [sendAsset](#sendasset)
    *   [sendAssetFrom](#sendassetfrom)
    *   [sendToAddr](#sendtoaddr)
    *   [sendData](#senddata)
    *   [sendDataFrom](#senddatafrom)
*   [交易服务](#-transactioncommand-)
    *   [showAddrDeal](#showaddrdeal)
    *   [showDeal](#showdeal)
    *   [showTxOut](#showtxout)
    *   [showWalletDeal](#showwalletdeal)
    *   [showAddrDeals](#showaddrdeals)
    *   [showWalletDeals](#showwalletdeals)
    *   [showTxOutData](#showtxoutdata)
*   [原始交易服务](#-rawdealcommand-)
    *   [setupRawDeal](#setuprawdeal)
    *   [addRawChange](#addrawchange)
    *   [addRawData](#addrawdata)
    *   [decodeRawDeal](#decoderawdeal)
    *   [showRawDeal](#showrawdeal)
    *   [setupRAWSendFrom](#setuprawsendfrom)
    *   [signRawDeal](#signrawdeal)
    *   [sendRawDeal](#sendrawdeal)
    *   [prelock](#prelock)
    *   [prelockFrom](#prelockfrom)
    *   [setupRawex](#setuprawex)
    *   [addRawex](#addrawex)
    *   [addRawDeal](#addrawdeal)
    *   [disRawDeal](#disrawdeal)
    *   [lock](#lock)
*   [钱包服务](#-walletcommand-)
    *   [backupWallet](#backupwallet)
    *   [walletLock](#walletlock)
    *   [encryptWallet](#encryptwallet)
    *   [walletPass](#walletpass)
*   [链外应用服务](#outchaincommand)
    *   [setupCache](#setupcache)
    *   [addCache](#addcache)
*   [权限服务](#-permissioncommand-)
    *   [ratify](#ratify)
    *   [cancel](#cancel)
    *   [showPermissions](#showpermissions)
    *   [showPermissionsByAddr](#showpermissionsbyaddr)
*   [其他服务](#-othercommand-)
    *   [setTxFee](#settxfee)
    *   [signMessage](#signmessage)
    *   [checkMessage](#checkmessage)

使用方法
====

生成SDK实例
-------

调用SDK入口，调用借口如下：

> 调用方法

    	String ip="127.0.0.1";
    	String port="5116";
    	/** rpcuser和rpcpassword是指
    	 *  Windows &lt; Vista: C:\Documents and Settings\Username\Application Data\TImo\(your blockchain name)\timo.conf
    	 *  Windows &gt; Vista: C:\Users\Username\AppData\Roaming\TImo\(your blockchain name)\timo.conf
    	 *  Mac and Linux : ~/.timo/(your blockchain name)/timo.conf
    	 */
    	String rpcuser="timorpc";
    	String rpcpassword="EmJyJpagFQdnhS8Hdvre7XJFQQ2FdafLZiiA5G3J433d";
    	Chain chain = new Chain(ip, port, rpcuser, rpcpassword);
    

当然，也可以快速的连接多个节点。

账户服务(AddressCommand)
--------------------

### addNewAddr

> 方法说明

该方法用于创建一个新地址.

> 调用命令

    	addnewaddr
    

> 调用方法

    	chain.getAddressCommand().addNewAddr();
    

> 方法参数

无

> 返回值

类型

描述

String

The new address

### setupMulti

> 方法说明

设置一个多签名地址，需要n个签名的m个密钥.

> 调用命令

    	setupmulti
    

> 调用方法

    	int numberOfSigRequired=2;
    	String[] publicKeys= {"02fe2f69a9697eb53a66f016636bc0efefc306c2c1b9a0cea99f3d4ffc4c43d259","027f74be522de4efd87c8f664ad9de06505f6302c5bc6016a7ffdf7b0d6f42a19b"};
    	chain.getAddressCommand().setupMulti(numberOfSigRequired, publicKeys);
    

> 方法参数

参数

类型

描述

numberOfSigRequired

int

The number of required signatures

publicKeys

String\[\]

A json array of keys which are addresses or hex-encoded public keys

> 返回值

类型

描述

[MultisigAddress](#multisigaddress)

a json object with the address and redeemScript

#### MultisigAddress

成员

类型

描述

address

String

The value of the new multisig address.

redeemScript

String

The string value of the hex-encoded redemption script.

### addMultiAddr

> 方法说明

    Add a nrequired-to-sign multisignature address to the wallet.
    

> 调用命令

    	addmultiaddr
    

> 调用方法

    	int numberOfSigRequired=2;
    	String[] publicKeys= {"02fe2f69a9697eb53a66f016636bc0efefc306c2c1b9a0cea99f3d4ffc4c43d259","027f74be522de4efd87c8f664ad9de06505f6302c5bc6016a7ffdf7b0d6f42a19b"};
    	chain.getAddressCommand().addMultiAddr(numberOfSigRequired, publicKeys);
    

> 方法参数

参数

类型

描述

numberOfSigRequired

int

The number of required signatures

publicKeys

String\[\]

A json array of keys which are addresses or hex-encoded public keys

> 返回值

类型

描述

String

The new address

### importPrivateKey

> 方法说明

Add a private key to your wallet

> 调用命令

    	importprivkey
    

> 调用方法

    	//Import a private key
    	String privateKey="privateKey";
    	chain.getAddressCommand().importPrivateKey(privateKey);
    	//Import multiple private keys
    	List<String> privateKeys=new ArrayList<String>();
    	privateKeys.add(privateKey);
    	chain.getAddressCommand().importPrivateKey(privateKeys);
    

> 方法参数

参数

类型

描述

1.privatekey

String

The private key (see dumpprivkey)

1.privateKeys

List

A json array of private keys

> 返回值

无

### showPrivateKey

> 方法说明

Reveals the private key corresponding to ‘address’

> 调用命令

    	dumpprivkey
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	chain.getAddressCommand().showPrivateKey(address);
    

> 方法参数

参数

类型

描述

address

String

The address for the private key

> 返回值

类型

描述

String

the privateKey

### importAddress

> 方法说明

Add an address or script (in hex) that can be watched as if it were in your wallet but cannot be used to spend.

> 调用命令

    	importaddr
    

> 调用方法

    	//Import a address
    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	boolean rescan=false;
    	chain.getAddressCommand().importAddress(address, rescan);
    	//Import multiple address
    	List<String> addresses=new ArrayList<String>();
    	addresses.add(address);
    	chain.getAddressCommand().importAddresses(addresses, rescan);
    

> 方法参数

> importAddress(String address,boolean rescan)

参数

类型

描述

address

String

The address

rescan

Boolean

rescan the wallet for transactions

> importAddress(List addresses,boolean rescan)

参数

类型

描述

address

List

The addresses

rescan

Boolean

rescan the wallet for transactions

> 返回值

无

### validateAddress

> 方法说明

Return info of specified address or public key or private key

> 调用命令

    	validaddr
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	chain.getAddressCommand().validateAddress(address);
    	List<String> addresses=new ArrayList<String>();
    	addresses.add(address);
    	chain.getAddressCommand().validateAddressRtnDetail(address);
    

> 方法参数

参数

类型

描述

address

String

The address

> 返回值

无

> validateAddress(String address)

类型

描述

Boolean

the address is valid or not

> validateAddressRtnDetail(String address)

类型

描述

[AddressInfoDto](#addressinfodto)

Return info of specified address or public key or private key.

#### AddressInfoDto

参数

类型

描述

address

String

address

isvalid

Boolean

If the address is valid or not

ismine

Boolean

If the address is yours or not

iswatchonly

Boolean

If the address is watchonly or not

isscript

Boolean

If the key is a script

pubkey

String

The hex value of the raw public key

iscompressed

Boolean

If the address is compressed

synchronized

Boolean

If the address is syncronized

### showAddresses

> 方法说明

Return all addr

> 调用命令

    	showaddrs
    

> 调用方法

    	chain.getAddressCommand().showAddresses();
    	chain.getAddressCommand().showAddressInfos();
    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	List<String> addresses=new ArrayList<String>();
    	addresses.add(address);
    	int count=Integer.MAX_VALUE;
    	int start=-count;
    	chain.getAddressCommand().showAddressInfos(addresses, count, start);
    

> 方法参数

无

> showAddressInfos(List addresses,int count,int start)

参数

类型

描述

addresses

List

The addresses

count

int

the number of addr to show

start

int

the number displayed from somewhere

> 返回值

> showAddresses()

类型

描述

List

The addresses

> showAddressInfos() or showAddressInfos(List addresses,int count,int start)

类型

描述

List<[AddressInfoDto](#addressinfodto)>

Return info of specified addresses

### setupKeyPairs

> 方法说明

Setup public/private key without wallet

> 调用命令

    	setupkeypairs
    

> 调用方法

    	int numberOfPairs=2;
    	chain.getAddressCommand().setupKeyPairs(numberOfPairs);
    

> 方法参数

参数

类型

描述

numberOfPairs

int

setup count

> 返回值

类型

描述

List<[KeyPairs](#keypairs)>

#### KeyPairs

参数

类型

描述

address

String

pubkey

String

privkey

String

### showAllBals

> 方法说明

Returns asset balances for specified address

> 调用命令

    	showallbals
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	chain.getAddressCommand().showAllBals();
    	chain.getAddressCommand().showAllBals(address);
    	String[] addressesArray=new String[]{address};
    	chain.getAddressCommand().showAllBals(addressesArray);
    	String [] assets=new String[] {"BTC"};
    	chain.getAddressCommand().showAllBals(addressesArray, assets);
    

> 方法参数

> showAllBals(String address)

参数

类型

描述

address

String

Address(es) to return balance for, comma delimited.

> showAllBals(String\[\] addresses)

参数

类型

描述

addresses

String\[\]

Address(es) to return balance for, comma delimited.

> showAllBals(String\[\] addresses, String\[\] assets)

参数

类型

描述

addresses

String\[\]

Address(es) to return balance for, comma delimited.

assets

String\[\]

Json array of asset identifiers to return balance for

> 返回值

类型

描述

[MultiBalance](#multibalance)

a hashmap.

#### MultiBalance

    	public class MultiBalance extends HashMap<String, List<BaseBalanceAsset>>{
    	
    	}
    

#### BaseBalanceAsset

参数

类型

描述

name

String

The name of the asset

assetref

String

Unique asset identification

qty

double

The number of assets

raw

long

The number of assets compared to the minimum unit

### showAddrBals

> 方法说明

Show assets count of specific address

> 调用命令

    	showaddrbals
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	chain.getAddressCommand().showAddrBals(address);
    	int minconf=1;
    	boolean includeLocked=false;
    	chain.getAddressCommand().showAddrBals(address, minconf, includeLocked);
    

> 方法参数

> showAddrBals(String address)

参数

类型

描述

address

String

Search address

> showAddrBals(String address,int minconf,boolean includeLocked)

参数

类型

描述

address

String

Search address

minconf

int

mini confirmed

includeLocked

boolean

Default=false If true include locked

> 返回值

类型

描述

List<[BaseBalanceAsset](#basebalanceasset)>

The assets info of specific address

资产服务(AssetCommand)
------------------

### showAssets

> 方法说明

Return assets list

> 调用命令

    	showassets
    

> 调用方法

    	chain.getAssetCommand().showAssets();
    	List<String> assetIds=new ArrayList<String>();
    	assetIds.add("BTC");
    	chain.getAssetCommand().showAssets(assetIds);
    

> 方法参数

> showAssets(List assetIds)

参数

类型

描述

assetIds

List

Asset-id include: create txid, reference, name.

> 返回值

类型

描述

List<[BalanceAsset](#balanceasset)>

Asset information

#### BalanceAsset

参数

类型

描述

name

String

The name of the asset

assetref

String

Unique asset identification

sellqty

double

The number of assets

sellraw

long

The number of assets compared to the minimum unit

multiple

long

multiple

units

double

unit

open

boolean

True means add-on sells are allowed

details

JSONObject

comment

selltxid

String

txid

restrict

JSONObject

restrict

### showAssetDeals

> 方法说明

Show deals involving asset.You need to order the asset type to be queried before querying

> 调用命令

    	showassetdeals
    

> 调用方法

    	String assetName="BTC";
    	long count=10;
    	long start=-10;
    	boolean localOrdering=false;
    	chain.getAssetCommand().showAssetDeals(assetName, count, start);
    	chain.getAssetCommand().showAssetDeals(assetName, count, start, localOrdering);
    

> 方法参数

参数

类型

描述

assetName

String

asset txid, asset reference, asset name.

count

long

Default=10 The number of deals to display

start

long

Default=-count - last Start from specific deal, 0 based, if negative - from the end

localOrdering

boolean

Default=false If true, deals appear in the order they were processed by the wallet,if false - in the order they appear in chain

> 返回值

类型

描述

List<[WalletTransactionDetail](#wallettransactiondetail)>

List of deals

#### WalletTransactionDetail

参数

类型

描述

addresses

JSONObject

{“address”:amount}

items

List<[Item](#item)>

data

List

confirmations

long

blockhash

String

blockindex

long

blocktime

long

txid

String

valid

boolean

time

long

timereceived

long

vin

List<[WalletTransactionVin](#wallettransactionvin)>

vout

List<[WalletTransactionVout](#wallettransactionvout)>

hex

String

#### Item

参数

类型

描述

type

String

name

String

dataref

String

itemsender

List

key

String

data

String data

#### WalletTransactionVin

参数

类型

描述

txid

String

vout

long

addresses

List

type

String

ismine

boolean

iswatchonly

boolean

amount

double

assets

List<[BalanceAsset](#balanceasset)>

#### WalletTransactionVout

参数

类型

描述

n

long

addresses

List

type

String

ismine

boolean

iswatchonly

boolean

amount

double

assets

List<[BalanceAsset](#balanceasset)>

permissions

List<[Permission](#permission)>

#### permission

参数

类型

描述

address

String

type

String

startblock

long

endblock

long

### sell

> 方法说明

Sell new asset(Issue digital assets).

> 调用命令

    	sell
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String assetName="CESHI";
    	boolean open=false;
    	double qty=100000;
    	double unit=0.01;
    	chain.getSellCommand().sell(address, assetName, open, qty, unit);
    

> 方法参数

参数

类型

描述

address

String

The address to send newly setuped asset to.

assetName

String

Asset name, if not “” should be unique.

open

boolean

Default false. True means add-on sells are allowed

qty

double

The asset total amount in display units. eg. 1000.28

unit

double

Default=1 Number of raw units in one displayed unit, eg 0.01

> 返回值

类型

描述

String

txid

### sellfrom

> 方法说明

sell asset using specific address

> 调用命令

    	sellfrom
    

> 调用方法

    	String fromAddr="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String toAddr="15znzmXnvkAJXWbaoMhwU2EEbKDYibtLWu2zKB";
    	String assetName="CESHI2";
    	boolean open=true;
    	double qty=100000;
    	double unit=0.01;
    	chain.getSellCommand().sellFrom(fromAddr, toAddr, assetName, open, qty, unit);
    

> 方法参数

参数

类型

描述

fromAddr

String

Address used for sell.

toAddr

String

The address to send newly setuped asset to.

assetName

String

Asset name, if not “” should be unique.

open

boolean

Default false. True means add-on sells are allowed

qty

double

The asset total amount in display units. eg. 1000.28

unit

double

Default=1 Number of raw units in one displayed unit, eg 0.01

> 返回值

类型

描述

String

txid

### sellAsset

> 方法说明

Add more units for asset

> 调用命令

    	sellasset
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String assetId="CESHI2";
    	double qty=10000;
    	chain.getSellCommand().sellAsset(address, assetId, qty);
    

> 方法参数

参数

类型

描述

address

String

The address to send newly setuped asset to.

assetId

String

Asset-id: sell txid, asset reference, asset name.

qty

double

The asset all amount in display units. eg. 1000.28

> 返回值

类型

描述

String

txid

区块服务(BlockCommand)
------------------

### showBestBlockHash

> 方法说明

Returns best block hash.

> 调用命令

    	showbestblockhash
    

> 调用方法

    	chain.getBlockCommand().showBestBlockHash();
    

> 方法参数

无

> 返回值

类型

描述

String

The block hash hex

### showBlock

> 方法说明

Returns block of hex-encoded data or json object.

> 调用命令

    	showblock
    

> 调用方法

    	String height="100";
    	chain.getBlockCommand().showBlock(height);
    	String blockhash="009de1b93154830d0b45a3ee662b060b544f75fe3e6811af18e552f4603c21c4";
    	chain.getBlockCommand().showBlock(blockhash);
    

> 方法参数

参数

类型

描述

blockhash

String

Block height or block hash

> 返回值

类型

描述

[Block](#block)

The block info

#### block

参数

类型

描述

hash

String

The block hash

miner

String

The address of the miner

confirmations

long

The number of confirmations

size

long

The block size

height

long

The block height or index

version

long

The block version

merkleroot

String

tx

List

time

long

The block time in seconds since epoch (Jan 1 1970 GMT)

nonce

long

bits

String

difficulty

double

chainwork

String

prevblockhash

String

nextblockhash

String

### showBlockCount

> 方法说明

Return block count of the chain.

> 调用命令

    	showblockcount
    

> 调用方法

    	chain.getBlockCommand().showBlockCount();
    

> 方法参数

无

> 返回值

类型

描述

long

The block count of the chain.

### showBlockHash

> 方法说明

Return specified block index hash.

> 调用命令

    	showblockhash
    

> 调用方法

    	long index=20;
    	chain.getBlockCommand().showBlockHash(index);
    

> 方法参数

参数

类型

描述

index

long

The block index

> 返回值

类型

描述

String

The block hash

数据模块服务(DataModCommand)
----------------------

### setupDataMod

> 方法说明

> 调用命令

    	Setup datamod
    

> 调用方法

    	String datamodName="DM01";
    	chain.getDataModCommand().setupDataMod(datamodName);
    	datamodName="DM02";
    	//Anyone can senditem to this datamod
    	chain.getDataModCommand().setupDataMod(datamodName, true);
    

> 方法参数

参数

类型

描述

datamodName

String

Datamod name

open

boolean

Default = false,If true anyone can senditem to this datamod

> 返回值

类型

描述

String

txid

### order

> 方法说明

Order to the datamod.

> 调用命令

    	order
    

> 调用方法

    	String datamodName="DM01";
    	chain.getDataModCommand().order(datamodName);
    	chain.getDataModCommand().order(datamodName,false);
    

> 方法参数

参数

类型

描述

datamodName

String

datamod txid, datamod reference, datamod name.

rescan

boolean

Default=true Rescan the wallet for deals

> 返回值

无

### noOrder

> 方法说明

noorders from the datamod.

> 调用命令

    	noorder
    

> 调用方法

    	String datamodName="DM01";
    	chain.getDataModCommand().noOrder(datamodName);
    

> 方法参数

参数

类型

描述

datamodName

String

datamod txid, datamod reference, datamod name.

> 返回值

无

### sendItem

> 方法说明

Send datamod item

> 调用命令

    	senditem
    

> 调用方法

    	String datamodName="DM01";
    	String key0="key0";
    	String dataHex="48656c6c6f20576f726c64";
    	chain.getDataModCommand().sendItem(datamodName, key0, dataHex);
    	String key1="key1";
    	JSONObject dataobj=new JSONObject();
    	dataobj.put("name", "Amy");
    	dataobj.put("age", 20);
    	chain.getDataModCommand().sendItem(datamodName, key1, dataobj);
    	String[] keys=new String[] {key0,key1};
    	chain.getDataModCommand().sendItem(datamodName, keys, dataobj);
    	chain.getDataModCommand().sendItem(datamodName, keys, dataHex);
    

> 方法参数

参数

类型

描述

datamodName

String

datamod txid, datamod reference, datamod name.

key

String

Item key

keys

String\[\]

Array of item keys

dataObj

JSONObject

Valid JSON object

dataHex

String

Data hex string

> 返回值

类型

描述

String

txid

### sendItemFrom

> 方法说明

Send datamod item from specific address

> 调用命令

    	senditemfrom
    

> 调用方法

    	String fromAddr="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String datamodName="DM01";
    	String key0="key0";
    	String dataHex="48656c6c6f20576f726c64";
    	chain.getDataModCommand().sendItemFrom(fromAddr,datamodName, key0, dataHex);
    	String key1="key1";
    	JSONObject dataobj=new JSONObject();
    	dataobj.put("name", "Amy");
    	dataobj.put("age", 20);
    	chain.getDataModCommand().sendItemFrom(fromAddr,datamodName, key1, dataobj);
    	String[] keys=new String[] {key0,key1};
    	chain.getDataModCommand().sendItemFrom(fromAddr,datamodName, keys, dataobj);
    	chain.getDataModCommand().sendItemFrom(fromAddr,datamodName, keys, dataHex);
    

> 方法参数

参数

类型

描述

fromAddr

String

Address used for sending.

datamodName

String

datamod txid, datamod reference, datamod name.

key

String

Item key

keys

String\[\]

Array of item keys

dataObj

JSONObject

Valid JSON object

dataHex

String

Data hex string

> 返回值

类型

描述

String

txid

### showDataItem

> 方法说明

Returns datamod item.

> 调用命令

    	showdataitem
    

> 调用方法

    	String datamodName="DM01";
    	String txid="be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6";
    	boolean verbose=false;
    	chain.getDataModCommand().showDataItem(datamodName, txid, verbose);
    

> 方法参数

参数

类型

描述

datamodName

String

datamod txid, datamod reference, datamod name.

txid

String

The TXID

verbose

boolean

Default=false If true, returns info about item deal

> 返回值

类型

描述

[DataModItem](#datamoditem)

datamod-item

#### DataModItem

参数

类型

描述

itemsender

List

keys

List

data

String

If hex

dataobj

JSONObject

If json or text

outchain

boolean

available

boolean

confirmations

long

blockhash

String

blockindex

long

blocktime

long

txid

String

vout

long

valid

boolean

time

long

timereceived

long

### showDataItems

> 方法说明

Return datamod items.

> 调用命令

    	showdataitems
    

> 调用方法

    	String datamodName="DM01";
    	int count=10;
    	int start=-10;
    	boolean localordering=true;
    	chain.getDataModCommand().showDataItems(datamodName, count, start, localordering);
    	//localordering=false;
    	chain.getDataModCommand().showDataItems(datamodName, count, start);
    

> 方法参数

参数

类型

描述

datamodName

String

count

long

start

long

localordering

boolean

If true, items in wallet,If false - items in block(default=false)

> 返回值

类型

描述

List<[DataModItem](#datamoditem)>

Datamod item list(array)

### showDataItemsByKey

> 方法说明

Return Datamod items for specific key.

> 调用命令

    	showdatakeyitems
    

> 调用方法

    	String datamodName="DM01";
    	String key="key0";
    	int count=10;
    	int start=-10;
    	boolean verbose=true;
    	chain.getDataModCommand().showDataItemsByKey(datamodName, key, count, start, verbose);
    	//verbose=false;
    	chain.getDataModCommand().showDataItemsByKey(datamodName, key, count, start);
    

> 方法参数

参数

类型

描述

datamodName

String

key

String

count

Integer

start

Integer

verbose

boolean

Default=false If true, items in wallet,if false - items in blockchain

> 返回值

类型

描述

List<[DataModItem](#datamoditem)>

Datamod item list(array)

### showDataSenderItems

> 方法说明

Return datamod items for specific sender.

> 调用命令

    	showdatasenderitems
    

> 调用方法

    	String datamodName="DM01";
    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	boolean detail=true;
    	int count=10;
    	int start=-10;
    	boolean verbose=true;
    	chain.getDataModCommand().showDataSenderItems(datamodName, address, detail, count, start, verbose);
    	//detail=false count=10 start=-10 verbose=false;
    	chain.getDataModCommand().showDataSenderItems(datamodName, address);
    

> 方法参数

参数

类型

描述

datamodName

String

address

String

Sender address

detail

boolean

Default=false If true, returns info about item deal

count

int

Default=10 The number of items to display

start

int

Default=-count - last Start from specific item, 0 based, if negative - from the end

verbose

boolean

Default=false If true, items in wallet,if false - in blockchain

> 返回值

类型

描述

List<[DataModItem](#datamoditem)>

Datamod item list(array)

### showDataSenders

> 方法说明

Returns datamod senders.

> 调用命令

    	showdatasenders
    

> 调用方法

    	String datamodName="DM01";
    	String[] addresses=new String[] {"1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8","15znzmXnvkAJXWbaoMhwU2EEbKDYibtLWu2zKB"};
    	boolean detail=false;
    	int count=10;
    	int start=-10;
    	boolean verbose=false;
    	chain.getDataModCommand().showDataSenders(datamodName, addresses, detail, count, start, verbose);
    

> 方法参数

参数

类型

描述

datamodName

String

addresses

String\[\]

A json array of sender addresses

detail

boolean

Default=false If true, returns extended info about sender

count

int

Default=INT_MAX - all The number of items to display

start

int

Default=-count - last) Start from specific item, 0 based, if negative - from the end

verbose

boolean

Default=false If true, items in wallet,if false - in blockchain

> 返回值

类型

描述

List<[DataModSenderDto](#datamodsenderdto)>

Datamod senders list(array).

#### DataModSenderDto

参数

类型

描述

senditemer

String

The address

items

int

Send the number

confirmed

int

Confirm the number

first

List<[DataModItem](#datamoditem)>

The item written to the data for the first time

last

List<[DataModItem](#datamoditem)>

The last item written to the data

### showDataTxItems

> 方法说明

Return datamod items for specific txids.

> 调用命令

    	showdatatxitems
    

> 调用方法

    	String datamodName="DM01";
    	List<String> txids=new ArrayList<String>();
    	txids.add("be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6");
    	txids.add("397738ef02b3cc9882bca2a3f89e4548b3ef16294e4701089dae8eb2b7519f16");
    	boolean verbose=false;
    	chain.getDataModCommand().showDataTxItems(datamodName, txids, verbose);
    

> 方法参数

参数

类型

描述

datamodName

String

txids

List

verbose

boolean

Default=false If true, returns info about item transaction

> 返回值

类型

描述

List<[DataModItem](#datamoditem)>

### showDataKeys

> 方法说明

Returns datamod keys.

> 调用命令

    	showdatakeys
    

> 调用方法

    	String datamodName="DM01";
    	List<String> keys=new ArrayList<>();
    	keys.add("key0");
    	keys.add("key1");
    	boolean verbose=false;
    	int count=10;
    	int start=-10;
    	boolean inWallet=false;
    	chain.getDataModCommand().showDataKeys(datamodName, keys, verbose, count, start, inWallet);
    	String key="*";
    	chain.getDataModCommand().showDataKeys(datamodName, key);
    

> 方法参数

参数

类型

描述

datamodName

String

key

String

Default=* Datamod key

keys

List

A json array of datamod keys

verbose

boolean

(boolean, optional, default=false) If true, returns extended info about key

count

int

Default=INT_MAX - all The number of items to display

start

int

Default=-count - last Start from specific item, 0 based, if negative - from the end

inWallet

boolean

Default=false If true, items in wallet,if false - in blockchain

> 返回值

类型

描述

List<[DataModKey](#datamodkey)>

Datamod keys list(array).

#### DataModKey

参数

类型

描述

key

String

items

int

confirmed

int

first

List<[DataModItem](#datamoditem)>

The item written to the data for the first time when verbose at true

last

List<[DataModItem](#datamoditem)>

The last item written to the data when verbose at true

### showDataKeySumm

> 方法说明

Return datamod json object items summary for specific key.

> 调用命令

    	showdatakeysumm
    

> 调用方法

    	String datamodName="DM01";
    	String key="key0";
    	String[] modes=new String[] { "jsonobjectmerge", "ignore" };
    	chain.getDataModCommand().showDataKeySumm(datamodName, key, modes);
    	//modes==new String[] { "jsonobjectmerge", "ignore" };
    	chain.getDataModCommand().showDataKeySumm(datamodName, key);
    

> 方法参数

参数

类型

描述

datamodName

String

key

String

modes

String\[\]

Comma delimited list of the following:jsonobjectmerge (required) - merge json objects recursive - merge json sub-objects recursively, noupdate - preserve first value for each key instead of taking the last, omitnull - omit keys with null values,ignoreother - ignore items that cannot be included in summary (otherwise returns an error),ignoremissing - ignore missing outchain items (otherwise returns an error)

> 返回值

类型

描述

JSONObject

Summary object for specific key.

### showDataSenderSumm

> 方法说明

Return datamod json object items summary for specific senditemer.

> 调用命令

    	showdatasendersumm
    

> 调用方法

    	String datamodName="DM01";
    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String[] modes=new String[] { "jsonobjectmerge", "ignore" };
    	chain.getDataModCommand().showDataSenderSumm(datamodName, address, modes);
    

> 方法参数

参数

类型

描述

datamodName

String

address

String

modes

String\[\]

Comma delimited list of the following:jsonobjectmerge (required) - merge json objects recursive - merge json sub-objects recursively, noupdate - preserve first value for each key instead of taking the last, omitnull - omit keys with null values,ignoreother - ignore items that cannot be included in summary (otherwise returns an error),ignoremissing - ignore missing outchain items (otherwise returns an error)

> 返回值

类型

描述

JSONObject

Summary object for specific senditemer.

转账服务(SendCommand)
-----------------

### send

> 方法说明

Send an amount or asset to address

> 调用命令

    	send
    

> 调用方法

    	String address="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	double amount=0.01;
    	chain.getSendCommand().send(address, amount);
    	List<BaseBalanceAsset> assets=new ArrayList<>();
    	BaseBalanceAsset asset0=new BaseBalanceAsset();
    	asset0.setName("");
    	asset0.setQty(0.01);
    	BaseBalanceAsset asset1=new BaseBalanceAsset();
    	asset1.setName("BTC");
    	asset1.setQty(0.001);
    	assets.add(asset0);
    	assets.add(asset1);
    	chain.getSendCommand().send(address, assets);
    	String comment="comment";
    	String commentTo="commentTo";
    	chain.getSendCommand().send(address, amount, comment, commentTo);
    	chain.getSendCommand().send(address, assets, comment, commentTo);
    

> 方法参数

> send(String address,double amount,String comment,String commentTo)

参数

类型

描述

address

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> send(String address,List assets,String comment,String commentTo)

参数

类型

描述

address

String

The address to send to.

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object to send

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> 返回值

类型

描述

String

txid

### sendFrom

> 方法说明

Send an amount (or several asset amounts) using specific address.

> 调用命令

    	sendfrom
    

> 调用方法

    	String fromAddr="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String toAddr="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	double amount=0.01;
    	chain.getSendCommand().sendFrom(fromAddr, toAddr, amount);
    	List<BaseBalanceAsset> assets=new ArrayList<>();
    	BaseBalanceAsset asset0=new BaseBalanceAsset();
    	asset0.setName("");
    	asset0.setQty(0.01);
    	BaseBalanceAsset asset1=new BaseBalanceAsset();
    	asset1.setName("BTC");
    	asset1.setQty(0.001);
    	assets.add(asset0);
    	assets.add(asset1);
    	chain.getSendCommand().sendFrom(fromAddr, toAddr, assets);
    	String comment="comment";
    	String commentTo="commentTo";
    	chain.getSendCommand().sendFrom(fromAddr, toAddr, amount, comment, commentTo);
    	chain.getSendCommand().sendFrom(fromAddr, toAddr, assets, comment, commentTo);
    

> 方法参数

> sendFrom(String fromAddr,String toAddr,double amount,String comment,String commentTo)

参数

类型

描述

fromAddr

String

Address to send from.

toAddr

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> sendFrom(String fromAddr,String toAddr,List assets,String comment,String commentTo)

参数

类型

描述

fromAddr

String

Address to send from.

toAddr

String

The address to send to.

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object to send

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> 返回值

类型

描述

String

txid

### sendAsset

> 方法说明

Send asset amount to a given address. The amounts are real.

> 调用命令

    	sendasset
    

> 调用方法

    	String address="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	String assetName="BTC";
    	double assetAmount=0.001;
    	chain.getSendCommand().sendAsset(address, assetName, assetAmount);
    	double nativeAmount=0.01;
    	String comment="comment";
    	String commentTo="commentTo";
    	chain.getSendCommand().sendAsset(address, assetName, assetAmount, nativeAmount, comment, commentTo);
    

> 方法参数

参数

类型

描述

address

String

The address to send to.

assetName

String

sell txid, asset reference, asset name.

assetAmount

double

Asset count.

nativeAmount

double

Native currency .

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> 返回值

类型

描述

String

txid

### sendAssetFrom

> 方法说明

Send asset amount to a given address. The amounts are real

> 调用命令

    	sendassetfrom
    

> 调用方法

    	String fromAddr="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String toAddr="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	String assetName="BTC";
    	double assetAmount=0.01;
    	double nativeAmount=0.01;
    	String comment="comment";
    	String commentTo="commentTo";
    	chain.getSendCommand().sendAssetFrom(fromAddr, toAddr, assetName, assetAmount);
    	chain.getSendCommand().sendAssetFrom(fromAddr, toAddr, assetName, assetAmount, nativeAmount, comment, commentTo);
    

> 方法参数

参数

类型

描述

fromAddr

String

Address to send from.

toAddr

String

The address to send to.

assetName

String

sell txid, asset reference, asset name.

assetAmount

double

The amount in native currency to send. eg 0.01

nativeAmount

double

Native currency .

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> 返回值

类型

描述

String

txid

### sendToAddr

> 方法说明

Send an amount (or several asset amounts) to a given address.

> 调用命令

    	sendtoaddr
    

> 调用方法

    	String address="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	double amount=0.01;
    	chain.getSendCommand().send(address, amount);
    	List<BaseBalanceAsset> assets=new ArrayList<>();
    	BaseBalanceAsset asset0=new BaseBalanceAsset();
    	asset0.setName("");
    	asset0.setQty(0.01);
    	BaseBalanceAsset asset1=new BaseBalanceAsset();
    	asset1.setName("BTC");
    	asset1.setQty(0.001);
    	assets.add(asset0);
    	assets.add(asset1);
    	chain.getSendCommand().sendToAddr(address, amount);
    	chain.getSendCommand().sendToAddr(address, assets);
    	String comment="comment";
    	String commentTo="commentTo";
    	chain.getSendCommand().sendToAddr(address, amount, comment, commentTo);
    	chain.getSendCommand().sendToAddr(address, assets, comment, commentTo);
    

> 方法参数

> sendToAddr(address, amount, comment, commentTo)

参数

类型

描述

address

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> sendToAddr(address, assets, comment, commentTo)

参数

类型

描述

address

String

The address to send to.

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object to send

comment

String

A comment used to store what the deal is for(not in block).

commentTo

String

A comment to store the name of the person or organization(not in block).

> 返回值

类型

描述

String

txid

### sendData

> 方法说明

Send an amount (or several asset amounts) to a given address with appended metadata.

> 调用命令

    	senddata
    

> 调用方法

    	String address="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	double amount=0.01;
    	chain.getSendCommand().send(address, amount);
    	List<BaseBalanceAsset> assets=new ArrayList<>();
    	BaseBalanceAsset asset0=new BaseBalanceAsset();
    	asset0.setName("");
    	asset0.setQty(0.01);
    	BaseBalanceAsset asset1=new BaseBalanceAsset();
    	asset1.setName("BTC");
    	asset1.setQty(0.001);
    	assets.add(asset0);
    	assets.add(asset1);
    	String dataHex="48656c6c6f20576f726c64";
    	chain.getSendCommand().sendData(address, amount, dataHex);
    	chain.getSendCommand().sendData(address, assets, dataHex);
    	JSONObject dataObj=new JSONObject();
    	JSONObject jsonObject=new JSONObject();
    	jsonObject.put("name", "Tom");
    	jsonObject.put("age", 20);
    	dataObj.put("json", jsonObject);
    	chain.getSendCommand().sendData(address, amount, dataObj);
    	chain.getSendCommand().sendData(address, assets, dataObj);
    

> 方法参数

> sendData(String address,Double amount,String dataHex)  
> sendData(String address,List assets,String dataHex)

参数

类型

描述

address

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object of assets to send

dataHex

String

hex

> sendData(String address,List assets,JSONObject dataObj)  
> sendData(String address,Double amount,JSONObject dataObj)

参数

类型

描述

address

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object of assets to send

dataObj

JSONObject

{“json” : data-json}

> 返回值

类型

描述

String

txid

### sendDataFrom

> 方法说明

Send an amount (or several asset amounts) with appended metadata using specific address.

> 调用命令

    	senddatafrom
    

> 调用方法

    	String fromAddr="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String toAddr="1MFy9EdPHniKBdo1b7TqnKsn7XX12qgB9EEUHj";
    	double amount=0.01;
    	String dataHex="48656c6c6f20576f726c64";
    	List<BaseBalanceAsset> assets=new ArrayList<>();
    	BaseBalanceAsset asset0=new BaseBalanceAsset();
    	asset0.setName("");
    	asset0.setQty(0.01);
    	BaseBalanceAsset asset1=new BaseBalanceAsset();
    	asset1.setName("BTC");
    	asset1.setQty(0.001);
    	assets.add(asset0);
    	assets.add(asset1);
    	JSONObject dataObj=new JSONObject();
    	JSONObject jsonObject=new JSONObject();
    	jsonObject.put("name", "Tom");
    	jsonObject.put("age", 20);
    	dataObj.put("json", jsonObject);
    	chain.getSendCommand().sendDataFrom(fromAddr, toAddr, amount, dataHex);
    	chain.getSendCommand().sendDataFrom(fromAddr, toAddr, amount, dataObj);
    	chain.getSendCommand().sendDataFrom(fromAddr, toAddr, assets, dataHex);
    	chain.getSendCommand().sendDataFrom(fromAddr, toAddr, assets, dataObj);
    

> 方法参数

> sendDataFrom(String fromAddr,String toAddr,Double amount,String dataHex)  
> sendDataFrom(String fromAddr,String toAddr,List assets,String dataHex)

参数

类型

描述

fromAddr

String

Address to send from.

toAddr

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object of assets to send

dataHex

String

hex

> sendDataFrom(String fromAddr,String toAddr,Double amount,JSONObject dataObj)  
> sendDataFrom(String fromAddr,String toAddr,List assets,JSONObject dataObj)

参数

类型

描述

fromAddr

String

Address to send from.

toAddr

String

The address to send to.

amount

double

The amount in native currency to send. eg 0.01

assets

List<[BaseBalanceAsset](#basebalanceasset)>

A json object of assets to send

dataObj

JSONObject

{“json” : data-json}or {“text”:data-text}

> 返回值

类型

描述

String

txid

交易服务(TransactionCommand)
------------------------

### showAddrDeal

> 方法说明

Provides info about TXID related to address in this node’s wallet

> 调用命令

    	showaddrdeal
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	String txid="be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6";
    	chain.getTransactionCommand().showAddrDeal(address, txid);
    

> 方法参数

参数

类型

描述

address

String

Address used for balance calculation.

txid

String

The TXID

> 返回值

类型

描述

[WalletTransactionDetail](#wallettransactiondetail)

### showDeal

> 方法说明

Show detailed info about in-wallet deal

> 调用命令

    	showdeal
    

> 调用方法

    	String txid="be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6";
    	boolean includeWatchonly=true;
    	chain.getTransactionCommand().showDeal(txid, includeWatchonly);
    

> 方法参数

参数

类型

描述

txid

String

The TXID

includeWatchonly

boolean

Default=false Whether to include watchonly addresses in balance calculation and details\[\]

> 返回值

类型

描述

[Transaction](#transaction)

#### Transaction

参数

类型

描述

amount

double

The deal amount in native currency

confirmations

long

The number of confirmations

blockhash

String

The block hash

blockindex

long

The block index

blocktime

long

The time in seconds since epoch (1 Jan 1970 GMT)

txid

String

The TXID.

valid

boolean

time

long

The deal time in seconds since epoch (1 Jan 1970 GMT)

timereceived

long

The time received in seconds since epoch (1 Jan 1970 GMT)

details

List<[TransactionDetail](#transactiondetail)>

hex

String

Raw data for deal

#### TransactionDetail

参数

类型

描述

account

String

The account name involved in the deal, can be “” for the default account.

address

String

The address involved in the deal

category

String

“send or receive”, The category, either ‘send’ or ‘receive’

amount

double

The amount in native currency

vout

long

The vout value

### showTxOut

> 方法说明

Return an unspent deal output with memorypool data.

> 调用命令

    	showtxout
    

> 调用方法

    	String txid="be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6";
    	int vout=0;
    	chain.getTransactionCommand().showTxOut(txid, vout);
    

> 方法参数

参数

类型

描述

txid

String

The TXID

vout

int

Vout value

> 返回值

类型

描述

[TxOut](#txout)

#### TxOut

参数

类型

描述

bestblock

String

The block hash

confirmations

long

value

double

The deal value

scriptPubKey

[ScriptPubKey](#scriptpubkey)

version

long

coinbase

boolean

Coinbase or not

assets

List<[BalanceAsset](#balanceasset)>

### showWalletDeal

> 方法说明

Show detailed info about in-wallet deal

> 调用命令

    	showwalletdeal
    

> 调用方法

    	String txid="be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6";
    	boolean includeWatchOnly=false;
    	boolean verbose=false;
    	chain.getTransactionCommand().showWalletDeal(txid, includeWatchOnly, verbose);
    	//verbose at false
    	chain.getTransactionCommand().showWalletDeal(txid, includeWatchOnly);
    

> 方法参数

参数

类型

描述

txid

String

The TXID

includeWatchOnly

boolean

Default=false If true include watchonly addr

verbose

boolean

Default=false If true, returns deals details

> 返回值

类型

描述

[WalletTransactionDetail](#wallettransactiondetail)

### showAddrDeals

> 方法说明

> 调用命令

    	sellasset
    

> 调用方法

    	String address="1Eyd4LzXvULy4dRRwUPF1eTHiv3om7ZjAWJAv8";
    	int count=10;
    	int skip=0;
    	boolean verbose=false;
    	chain.getTransactionCommand().showAddrDeals(address, count, skip, verbose);
    	//verbose at false
    	chain.getTransactionCommand().showAddrDeals(address, count, skip);
    	//verbose at false and skip at 0
    	chain.getTransactionCommand().showAddrDeals(address, count);
    

> 方法参数

参数

类型

描述

address

String

Address to show deals for.

count

int

Default=10 The number of deals to return

skip

int

Default=0 The number of deals to skip

verbose

boolean

Default=false If true, return detailed array deals

> 返回值

类型

描述

List<[WalletTransactionDetail](#wallettransactiondetail)>

### showWalletDeals

> 方法说明

Return up to ‘count’ most recent deals skipping the first ‘from’ deals for this wallet.

> 调用命令

    	showWalletDeals
    

> 调用方法

    	int count=10;
    	int skip=0;
    	boolean includeWatchOnly=false;
    	chain.getTransactionCommand().showWalletDeals(count, skip, includeWatchOnly);
    	//includeWatchOnly at false
    	chain.getTransactionCommand().showWalletDeals(count, skip);
    	//includeWatchOnly at false and skip at 0
    	chain.getTransactionCommand().showWalletDeals(count);
    

> 方法参数

参数

类型

描述

count

long

Default=10 The number of deals to return

skip

long

Default=0 The number of deals to skip

includeWatchOnly

boolean

Default=false Include watchonly addr

> 返回值

类型

描述

List<[WalletTransactionDetail](#wallettransactiondetail)>

### showTxOutData

> 方法说明

Return metadata of deal output.

> 调用命令

    	showtxoutdata
    

> 调用方法

    	String txid="be5a37f8fd9f4272132d09205df4ca70ed7e1adf2d0d05e8e71c19c406cfa5a6";
    	int vout=0;
    	int count=Integer.MAX_VALUE;
    	int start=0;
    	chain.getTransactionCommand().showTxOutData(txid, vout, count, start);
    

> 方法参数

参数

类型

描述

txid

String

vout

int

count

int

Default=INT_MAX Number of bytes to return

start

int

Default=0 start from specific byte

> 返回值

类型

描述

String

Deal output metadata in hexadecimal form.

原始交易服务(RawDealCommand)
----------------------

### setupRawDeal

> 方法说明

Create a deal spending the given inputs.

> 调用命令

    	setuprawdeal
    

> 调用方法(setupRawDeal deals addrObj)

    	List<Deal> deals = new ArrayList<Deal>();
    	JSONObject addrObj = new JSONObject();
    	chain.getRawDealCommand().setupRawDeal(deals, addrObj);
    

> 调用方法(setupRawDeal deals addrObj data action)

    	List<Deal> deals = new ArrayList<Deal>();
    	JSONObject addrObj = new JSONObject();
    	JSONArray data = new JSONArray();
    	String action = "sign";
    	chain.getRawDealCommand().setupRawDeal(deals, addrObj, data, action);
    

> 方法参数(setupRawDeal deals addrObj)

参数

类型

描述

deals

List<[Deal](#deal)>

A json array

addrObj

JSONObject

Object with addresses as keys, see help addr-all for details.

> 方法参数(setupRawDeal deals addrObj data action)

参数

类型

描述

deals

List<[Deal](#deal)>

A json array

addrObj

JSONObject

Object with addresses as keys, see help addr-all for details.

data

JSONArray

Array of hexadecimal strings or data objects, see help all-data for details.

action

String

Default “” Additional actions: “lock”, “sign”, “lock,sign”, “sign,lock”, “send”.

> 返回值(setupRawDeal deals addrObj)

类型

描述

String

Hex string of the deal

> 返回值(setupRawDeal deals addrObj data action)

类型

描述

Object

A json object(if action= “sign” or “lock,sign” or “sign,lock”)

### addRawChange

> 方法说明

Add change output to raw deal, containing any remaining assets

> 调用命令

    	addrawchange
    

> 调用方法(addRawChange hexString address)

    	String hexString = "02fe2f...";
    	String address = "1At...kEha";
    	chain.getRawDealCommand().addRawChange(hexString, address);
    

> 调用方法(addRawChange hexString address fee)

    	String hexString = "02fe2f...";
    	String address = "1At...kEha";
    	double fee = 0.01;
    	chain.getRawDealCommand().addRawChange(hexString, address, fee);
    

> 方法参数(addRawChange hexString address)

参数

类型

描述

hexString

String

The hex string of the raw deal.

address

String

The address to send the change to.

> 方法参数(addRawChange hexString address fee)

参数

类型

描述

hexString

String

The hex string of the raw deal.

address

String

The address to send the change to.

fee

double

Native currency value deducted from that amount so it becomes a deal fee.

> 返回值

类型

描述

String

Hex string of the deal

### addRawData

> 方法说明

Add new output to existing raw deal.

> 调用命令

    	addrawdata
    

> 调用方法

    	String txHex = "02fe2f...";
    	String dataHex = "acf7e74394...";
    	chain.getRawDealCommand().addRawData(txHex, dataHex);
    

> 方法参数

参数

类型

描述

txHex

String

The deal hex string

dataHex

String

Data, see help all-data for details.

> 返回值

类型

描述

String

Hex string of the deal

### decodeRawDeal

> 方法说明

Return a JSON object, hex-encoded deal.

> 调用命令

    	decoderawdeal
    

> 调用方法

    	String hex ="02fe2f...";
    	chain.getRawDealCommand().decodeRawDeal(hex);
    

> 方法参数

参数

类型

描述

hex

String

The deal hex string.

> 返回值

类型

描述

[DealRAW](#dealraw)

### showRawDeal

> 方法说明

:Return the raw deal data.

> 调用命令

    	showrawdeal
    

> 调用方法(showRawDeal txid)

    	String txid = "02fe2f...";
    	chain.getRawDealCommand().showRawDeal(txid);
    

> 调用方法(showRawDeal txid verbose)

    	String txid = "02fe2f...";
    	int verbose = 0;
    	chain.getRawDealCommand().showRawDeal(txid, verbose);
    

> 方法参数(showRawDeal txid)

参数

类型

描述

txid

String

The TXID

> 方法参数(showRawDeal txid verbose)

参数

类型

描述

txid

String

The TXID

verbose

int

Default=0

> 返回值(showRawDeal txid)

类型

描述

[DealRAW](#dealraw)

> 返回值(showRawDeal txid verbose)

类型

描述

Object

string or json object

### setupRAWSendFrom

> 方法说明

Setup a deal using the given sending address.

> 调用命令

    	setuprawsendfrom
    

> 调用方法

    	String address = "1At...kEha";
    	List<RawParam> rawParams = new ArrayList<RawParam>();
    	String[] data = {};
    	String action = "sign";
    	chain.getRawDealCommand().setupRAWSendFrom(address, rawParams, data, action);
    

> 方法参数

参数

类型

描述

address

String

Address to send from.

rawParams

List<[RawParam](#rawparam)>

Object with addresses as keys, see help addr-all for details.

data

String\[\]

Array of hexadecimal strings or data objects, see help all-data for details.

action

String

Default “” Additional actions: “lock”, “sign”, “lock,sign”, “sign,lock”, “send”.

> 返回值

类型

描述

String

Hex string of the deal (if action= “” or “lock”)

String

A json object (if action= “sign” or “lock,sign” or “sign,lock”)

String

The deal hash in hex (if action= “send”)

### signRawDeal

> 方法说明

Sign inputs for raw deal (serialized, hex-encoded).

> 调用命令

    	signrawdeal
    

> 调用方法

    	String hexString = "02fe2f...";
    	chain.getRawDealCommand().signRawDeal(hexString);
    

> 方法参数

参数

类型

描述

hexString

String

The hex string of the raw deal

> 返回值

类型

描述

[Raw](#raw)

### sendRawDeal

> 方法说明

Submits raw deal (serialized, hex-encoded) to local node and network.

> 调用命令

    	sendrawdeal
    

> 调用方法

    	String hexString = "02fe2f...";
    	chain.getRawDealCommand().sendRawDeal(hexString);
    

> 方法参数

参数

类型

描述

hexString

String

The hex string of the raw deal

> 返回值

类型

描述

String

The deal hash in hex

### prelock

> 方法说明

Prepares exchange deal output for setuprawex, addrawex.

> 调用命令

    	prelock
    

> 调用方法

    	List<BaseAsset> assets = new ArrayList<BaseAsset>();
    	boolean lockUnspent = true;
    	chain.getRawDealCommand().prelock(assets, lockUnspent);
    

> 方法参数

参数

类型

描述

assets

List<[BaseAsset](#baseasset)>

A json object of assets to send

lockUnspent

boolean

Default=true Lock prepared unspent output

> 返回值

类型

描述

[Deal](#deal)

### prelockFrom

> 方法说明

Prepares exchange deal output for setuprawex, addrawex using specific address.

> 调用命令

    	prelockfrom
    

> 调用方法

    	String address = "1At...kEha";
    	List<BaseAsset> assets = new ArrayList<BaseAsset>();
    	boolean lockUnspent = true;
    	chain.getRawDealCommand().prelockFrom(address, assets, lockUnspent);
    

> 方法参数

参数

类型

描述

address

String

Address to send from .

assets

List<[BaseAsset](#baseasset)>

A json object of assets to send

lockUnspent

boolean

Default=true Lock prepared unspent output

> 返回值

类型

描述

[Deal](#deal)

### setupRawex

> 方法说明

Setup new exchange deal

> 调用命令

    	setuprawex
    

> 调用方法

    	String txid ="68665ase...";
    	int vout =0;
    	JSONObject assetObj = new JSONObject();
    	chain.getRawDealCommand().setupRawex(txid, vout, assetObj);
    

> 方法参数

参数

类型

描述

txid

String

TXID by prelock.

vout

int

Output index

assetObj

JSONObject

A json object of assets to ask

> 返回值

类型

描述

String

Hex string of the deal.

### addRawex

> 方法说明

Add to the raw atomic exchange deal in tx-hex given by a previous call to setuprawex or addrawex.

> 调用命令

    	addrawex
    

> 调用方法

    	String hex="02fe2f...";
    	String txid ="68665ase...";
    	int vout =0;
    	JSONObject assetObj = new JSONObject();
    	chain.getRawDealCommand().addRawex(hex, txid, vout, assetObj);
    

> 方法参数

参数

类型

描述

hex

String

The deal hex string

txid

String

TXID of the output prepared by prelock.

vout

int

Output index

assetObj

JSONObject

A json object of assets to ask

> 返回值

类型

描述

[Raw](#raw)

### addRawDeal

> 方法说明

Add inputs and outputs to raw deal.

> 调用命令

    	addrawdeal
    

> 调用方法(addRawDeal String hex,List deals, JSONObject addrObj)

    	String hex = "02fe2f...";
    	List<Deal> deals = new ArrayList<Deal>();
    	JSONObject addrObj = new JSONObject();
    	chain.getRawDealCommand().addRawDeal(hex, deals, addrObj);
    

> 调用方法(String hex, List deals, JSONObject addrObj, JSONArray data, String action)

    	String hex = "02fe2f...";
    	List<Deal> deals = new ArrayList<Deal>();
    	JSONObject addrObj = new JSONObject();
    	JSONArray data = new JSONArray();
    	String action ="sign";
    	chain.getRawDealCommand().addRawDeal(hex, deals, addrObj, data, action);
    

> 方法参数(addRawDeal String hex,List deals, JSONObject addrObj)

参数

类型

描述

hex

String

Source deal hex string

deals

[Deal](#deal)

A json array of json objects

addrObj

JSONObject

Object with addresses as keys, see help addr-all for details.

> 方法参数(String hex, List deals, JSONObject addrObj, JSONArray data, String action)

参数

类型

描述

hex

String

Source deal hex string

deals

[Deal](#deal)

A json array of json objects

addrObj

JSONObject

Object with addresses as keys, see help addr-all for details.

data

JSONArray

Array of hexadecimal strings or data objects, see help all-data for details.

action

String

Default “” Additional actions: “lock”, “sign”, “lock,sign”, “sign,lock”, “send”.

> 返回值(addRawDeal String hex,List deals, JSONObject addrObj)

类型

描述

String

Hex string of the deal

> 返回值(String hex, List deals, JSONObject addrObj, JSONArray data, String action)

类型

描述

String

Hex string of the deal (if action= “” or “lock”)

JSONObject

A json object (if action= “sign” or “lock,sign” or “sign,lock”)

String

The deal hash in hex (if action= “send”)

### diaRawDeal

> 方法说明

Disable raw deal by spending one of its inputs and sending it back to the wallet.

> 调用命令

    	disrawdeal
    

> 调用方法

    	String hex = "02fe2f...";
    	chain.getRawDealCommand().disRawDeal(hex);
    

> 方法参数、

参数

类型

描述

hex

String

The deal hex string

> 返回值

类型

描述

String

The TXID.

### lock

> 方法说明

Updates list of temporarily unspendable outputs.

> 调用命令

      lock
    

> 调用方法(lock unlock)

    	boolean unlock=true;
    	chain.getRawDealCommand().lock(unlock);
    

> 调用方法（lock unlock list）

    	boolean unlock=true;
    	List<Deal> deals = new ArrayList<Deal>();
    	chain.getRawDealCommand().lock(unlock, deals);
    

> 方法参数（lock unlock）

参数

类型

描述

unlock

boolean

Whether to unlock (true) or lock (false) the specified deals

> 方法参数（lock unlock list）

参数

类型

描述

unlock

boolean

Whether to unlock (true) or lock (false) the specified deals

list

[Deal](#deal)

A json array of objects. Each object the txid vout

> 返回值

类型

描述

Boolean

Successful or not

#### Deal

成员

类型

描述

txid

String

The TXID.

vout

int

The VOUT.

#### Raw

成员

类型

描述

hex

String

The raw deal with signature(s) (hex-encoded string).

complete

boolean

If exchange is completed and can be sent.

#### BaseAsset

成员

类型

描述

name

String

asset-name.

quantity

double

asset-quantity.

#### RawParam

成员

类型

描述

address

String

send-address.

amount

double

send-amount.

assets

List<[BaseAsset](#baseasset)>

send-asset.

#### DealRAW

成员

类型

描述

txid

String

The TXID.

version

int

The version.

locktime

long

The lock time

vin

List<[DealRAWVin](#dealrawvin)>

vout

List<[DealRAWVout](#dealrawvout)>

data

List

#### DealRAWVin

成员

类型

描述

txid

String

The TXID.

vout

long

scriptSig

[ScriptSig](#scriptsig)

The script

coinbase

String

sequence

long

The script sequence number.

#### DealRAWVout

成员

类型

描述

value

double

The value in tim.

n

long

index

scriptPubKey

[ScriptPubKey](#scriptpubkey)

assets

List<[BalanceAsset](#balanceasset)>

permissions

List<[Permission](#permission)>

items

List<[Item](#item)>

#### ScriptSig

成员

类型

描述

asm

String

The asm.

hex

String

The hex.

#### ScriptPubKey

成员

类型

描述

asm

String

The asm.

hex

String

The hex.

reqSigs

long

The required signs.

type

String

The type, eg ‘pubkeyhash’.

addresses

List

address.

钱包服务(WalletCommand)
-------------------

### backupWallet

> 方法说明

Safely copies wallet.dat to destination, which can be a directory or a path with filename.

> 调用命令

    	backupwallet
    

> 调用方法

    	String absolutPath = "./timo/..";
    	chain.getWalletCommand().backupWallet(absolutPath);
    

> 方法参数

参数

类型

描述

absolutPath

String

The destination directory or file

### walletLock

> 方法说明

Remove the wallet encryption key from memory and lock the wallet.

> 调用命令

    	walletlock
    

> 调用方法

    	chain.getWalletCommand().walletLock();
    

### encryptWallet

> 方法说明

Encrypts the wallet with ‘password’. This is for first time encryption.

> 调用命令

    	encryptwallet
    

> 调用方法

    	String password = "password";
    	chain.getWalletCommand().encryptWallet(password);
    

> 方法参数

参数

类型

描述

password

String

The pass phrase to encrypt the wallet with.

### walletPass

> 方法说明

> 调用命令

    	walletpass
    

> 调用方法

    	String password = "password";
    	long unlockTime = 1;
    	chain.getWalletCommand().walletPass(password, unlockTime);
    

> 方法参数

参数

类型

描述

password

String

The pass phrase to the wallet .

unlockTime

long

链外应用服务(OutChainCommand)
-----------------------

### setupCache

> 方法说明

Returns random string, which can be used as binary cache item identifier.

> 调用命令

    	setupcache
    

> 调用方法

    	chain.getOutChainCommand().setupCache();
    

> 返回值

类型

描述

String

Binary cache item identifier

### addCache

> 方法说明

Appends data to cache.

> 调用命令

    	addcache
    

> 调用方法

    	String cache = "JavaSDK";
    	String hex = "02fe2f...";
    	chain.getOutChainCommand().addCache(cache, hex);
    

> 方法参数

参数

类型

描述

cache

String

cache item identifier

hex

String

The hex string to be added to cache

> 返回值

类型

描述

long

Size of the binary cache item

权限服务(PermissionCommand)
-----------------------

### ratify

> 方法说明

Set the use of the specified address permissions

> 调用命令

    	ratify
    

> 调用方法

    	String address="1At...kEha";
    	String permission = "send";
    	chain.getPermissionCommand().ratify(address, permission);
    

> 方法参数

参数

类型

描述

address

String

address

permission

String

Permission strings (Include: connect,send,receive,sell,mine,root,admin;setupAsset permission: assetname.sell,root;Datamod permission: datamodname.write,admin,root)

> 返回值

类型

描述

String

The TXID.

### cancel

> 方法说明

Cancel permission from a given address.

> 调用命令

    	cancel
    

> 调用方法

    	String address="1At...kEha";
    	String permission = "send";
    	chain.getPermissionCommand().cancel(address, permission);
    

> 方法参数

参数

类型

描述

address

String

address

permission

String

Permission strings (Include: connect,send,receive,sell,mine,root,admin;setupAsset permission: assetname.sell,root;Datamod permission: datamodname.write,admin,root)

> 返回值

类型

描述

String

The TXID.

### showPermissions

> 方法说明

Return permissions of all local addresses.

> 调用命令

    	showpermissions
    

> 调用方法

    	String permissions = "send";
    	chain.getPermissionCommand().showPermissions(permissions);
    

> 方法参数

参数

类型

描述

permission(s)

String

Permission strings, possible values: connect,send,receive,sell,mine,root,admin,setup."*" for all permissions . Default: *.

> 返回值

类型

描述

[Permission](#permission)

An array permissions list.

### showPermissionsByAddr

> 方法说明

Return permissions of all local addresses.

> 调用命令

    	showpermissions
    

> 调用方法

    	String address="1At...kEha";
    	chain.getPermissionCommand().showPermissionsByAddr(address);
    

> 方法参数

参数

类型

描述

address

String

The addresses to retrieve permissions for. “*” for all addresses. Default: *.

> 返回值

类型

描述

[Permission](#permission)

An array permissions list.

#### Permission

成员

类型

描述

address

String

address.

type

String

The type of the permission.

startblock

long

The number of the startblock.

endblock

long

The number of the endblock.

其他服务(OtherCommand)
------------------

### setTxFee

> 方法说明

Set the deal fee per kB.

> 调用命令

    	settxfee
    

> 调用方法

    	chain.getFeeCommand().setTxFee(0.000001);
    

> 方法参数

参数

类型

描述

amount

double

The deal fee in (native currency)/kB rounded to the nearest 0.000001

> 返回值

类型

描述

boolean

Return true if successful

### signMessage

> 方法说明

Sign a message with the private key of an address

> 调用命令

    signmessage
    

> 调用方法

    	String addressOrPrivateKey="1At...kEha";
    	String message="javasdk";
    	chain.getMessageCommand().signMessage(addressOrPrivateKey, message);
    

> 方法参数

参数

类型

描述

1.address

String

The address to use for the private key.

1.privkey

String

The private key (see dumpprivkey and setupkeypairs).

2.message

String

The message to setup a signature of.

> 返回值

类型

描述

String

The signature of the message encoded in base 64

### checkMessage

> 方法说明

Verify a signed message.

> 调用命令

    checkmessage
    

> 调用方法

    	String address="1At...kEha";
    	String signature ="02fe2f...";
    	String message="javasdk";
    	chain.getMessageCommand().checkMessage(address, signature, message);
    

> 方法参数

参数

类型

描述

address

String

The address to use for the signature.

signature

String

The signature provided by the signer in base 64 encoding (see signmessage).

message

String

The message that was signed.

> 返回值

类型

描述

boolean

If the signature is verified or not.
