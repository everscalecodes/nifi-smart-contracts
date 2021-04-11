pragma ton-solidity ^0.40.0;

abstract contract Accept {
    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }
}