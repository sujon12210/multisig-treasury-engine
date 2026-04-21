const { ethers } = require("ethers");

const ABI = [
    "function submitTransaction(address _to, uint256 _value, bytes _data) public",
    "function confirmTransaction(uint256 _txIndex) public",
    "function executeTransaction(uint256 _txIndex) public",
    "function getTransactionCount() public view returns (uint256)"
];

async function confirmAndExecute(walletAddress, txIndex, signer) {
    const wallet = new ethers.Contract(walletAddress, ABI, signer);
    
    console.log(`Confirming transaction ${txIndex}...`);
    const confirmTx = await wallet.confirmTransaction(txIndex);
    await confirmTx.wait();
    
    console.log("Execution triggered...");
    try {
        const execTx = await wallet.executeTransaction(txIndex);
        await execTx.wait();
        console.log("Transaction successfully executed!");
    } catch (e) {
        console.log("Threshold not yet met or execution failed.");
    }
}
