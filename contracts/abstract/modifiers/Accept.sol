pragma ton-solidity ^0.42.0;

abstract contract Accept {
    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }
}