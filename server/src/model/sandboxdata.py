from typing import List

from src.model.asset import Asset


class SandboxData:
    _virtual_start: str = ""
    _virtual_current: str = ""
    _balance: float = 0.0
    _assets: List[Asset] = []

    def __init__(self, virtual_start: str, virtual_current: str, balance: float, assets: List[Asset]):
        self._virtual_start = virtual_start
        self._virtual_current = virtual_current
        self._balance = balance
        self._assets = assets

