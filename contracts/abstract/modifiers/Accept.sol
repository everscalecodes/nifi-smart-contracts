pragma ton-solidity ^0.43.0;

abstract contract Accept {
    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }
}