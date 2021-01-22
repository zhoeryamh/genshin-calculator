function weapCount(weapIndex, ascendLevel, weaponRarity) {
    let sum = 0;

    switch (weaponRarity) {
        case 1:
            if (weapIndex == 0) {
                if (ascendLevel <= 0) {
                    sum = 1;
                } else if (ascendLevel > 0) {
                    sum = 0;
                }
            } else if (weapIndex == 1) {
                if (ascendLevel <= 1) {
                    sum = 3;
                } else if (ascendLevel <= 2) {
                    sum = 2;
                } else if (ascendLevel > 2) {
                    sum = 0;
                }
            } else if (weapIndex == 2) {
                if (ascendLevel <= 3) {
                    sum = 1;
                } else if (ascendLevel > 3) {
                    sum = 0;
                }
            }
            return sum;
        case 2:
            if (weapIndex == 0) {
                if (ascendLevel <= 0) {
                    sum = 1;
                } else if (ascendLevel > 0) {
                    sum = 0;
                }
            } else if (weapIndex == 1) {
                if (ascendLevel <= 1) {
                    sum = 4;
                } else if (ascendLevel <= 2) {
                    sum = 3;
                } else if (ascendLevel > 2) {
                    sum = 0;
                }
            } else if (weapIndex == 2) {
                if (ascendLevel <= 3) {
                    sum = 1;
                } else if (ascendLevel > 3) {
                    sum = 0;
                }
            }
            return sum;
        case 3:
            if (weapIndex == 0) {
                if (ascendLevel <= 0) {
                    sum = 2;
                } else if (ascendLevel > 0) {
                    sum = 0;
                }
            } else if (weapIndex == 1) {
                if (ascendLevel <= 1) {
                    sum = 6;
                } else if (ascendLevel <= 2) {
                    sum = 4;
                } else if (ascendLevel > 2) {
                    sum = 0;
                }
            } else if (weapIndex == 2) {
                if (ascendLevel <= 3) {
                    sum = 6;
                } else if (ascendLevel <= 4) {
                    sum = 4;
                } else if (ascendLevel > 4) {
                    sum = 0;
                }
            } else if (weapIndex == 3) {
                if (ascendLevel <= 5) {
                    sum = 3;
                } else if (ascendLevel > 5) {
                    sum = 0;
                }
            }
            return sum;
        case 4:
            if (weapIndex == 0) {
                if (ascendLevel <= 0) {
                    sum = 3;
                } else if (ascendLevel > 0) {
                    sum = 0;
                }
            } else if (weapIndex == 1) {
                if (ascendLevel <= 1) {
                    sum = 9;
                } else if (ascendLevel <= 2) {
                    sum = 6;
                } else if (ascendLevel > 2) {
                    sum = 0;
                }
            } else if (weapIndex == 2) {
                if (ascendLevel <= 3) {
                    sum = 9;
                } else if (ascendLevel <= 4) {
                    sum = 6;
                } else if (ascendLevel > 4) {
                    sum = 0;
                }
            } else if (weapIndex == 3) {
                if (ascendLevel <= 5) {
                    sum = 4;
                } else if (ascendLevel > 5) {
                    sum = 0;
                }
            }
            return sum;
        case 5:
            if (weapIndex == 0) {
                if (ascendLevel <= 0) {
                    sum = 5;
                } else if (ascendLevel > 0) {
                    sum = 0;
                }
            } else if (weapIndex == 1) {
                if (ascendLevel <= 1) {
                    sum = 14;
                } else if (ascendLevel <= 2) {
                    sum = 9;
                } else if (ascendLevel > 2) {
                    sum = 0;
                }
            } else if (weapIndex == 2) {
                if (ascendLevel <= 3) {
                    sum = 14;
                } else if (ascendLevel <= 4) {
                    sum = 9;
                } else if (ascendLevel > 4) {
                    sum = 0;
                }
            } else if (weapIndex == 3) {
                if (ascendLevel <= 5) {
                    sum = 6;
                } else if (ascendLevel > 5) {
                    sum = 0;
                }
            }
            return sum;
    }
    return sum;
}

function commCount(arrayIndex, commIndex, ascendLevel, weaponRarity) {
    let sum = 0;
    if (arrayIndex == 0) {
        switch (weaponRarity) {
            case 1:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 5;
                    } else if (ascendLevel <= 1) {
                        sum = 4;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 6;
                    } else if (ascendLevel <= 3) {
                        sum = 4;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                }
                return sum;
            case 2:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 6;
                    } else if (ascendLevel <= 1) {
                        sum = 5;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 8;
                    } else if (ascendLevel <= 3) {
                        sum = 5;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                }
                return sum;
            case 3:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 10;
                    } else if (ascendLevel <= 1) {
                        sum = 8;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 12;
                    } else if (ascendLevel <= 3) {
                        sum = 8;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                } else if (commIndex == 2) {
                    if (ascendLevel <= 4) {
                        sum = 18;
                    } else if (ascendLevel <= 5) {
                        sum = 12;
                    } else if (ascendLevel > 5) {
                        sum = 0;
                    }
                }
                return sum;
            case 4:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 15;
                    } else if (ascendLevel <= 1) {
                        sum = 12;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 18;
                    } else if (ascendLevel <= 3) {
                        sum = 12;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                } else if (commIndex == 2) {
                    if (ascendLevel <= 4) {
                        sum = 27;
                    } else if (ascendLevel <= 5) {
                        sum = 18;
                    } else if (ascendLevel > 5) {
                        sum = 0;
                    }
                }
                return sum;
            case 5:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 23;
                    } else if (ascendLevel <= 1) {
                        sum = 18;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 27;
                    } else if (ascendLevel <= 3) {
                        sum = 18;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                } else if (commIndex == 2) {
                    if (ascendLevel <= 4) {
                        sum = 41;
                    } else if (ascendLevel <= 5) {
                        sum = 27;
                    } else if (ascendLevel > 5) {
                        sum = 0;
                    }
                }
                return sum;
        }
    } else if (arrayIndex == 1) {
        switch (weaponRarity) {
            case 1:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 3;
                    } else if (ascendLevel <= 1) {
                        sum = 2;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 5;
                    } else if (ascendLevel <= 3) {
                        sum = 3;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                }
                return sum;
            case 2:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 5;
                    } else if (ascendLevel <= 1) {
                        sum = 4;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 7;
                    } else if (ascendLevel <= 3) {
                        sum = 4;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                }
                return sum;
            case 3:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 6;
                    } else if (ascendLevel <= 1) {
                        sum = 5;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 10;
                    } else if (ascendLevel <= 3) {
                        sum = 6;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                } else if (commIndex == 2) {
                    if (ascendLevel <= 4) {
                        sum = 12;
                    } else if (ascendLevel <= 5) {
                        sum = 8;
                    } else if (ascendLevel > 5) {
                        sum = 0;
                    }
                }
                return sum;
            case 4:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 10;
                    } else if (ascendLevel <= 1) {
                        sum = 8;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 15;
                    } else if (ascendLevel <= 3) {
                        sum = 9;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                } else if (commIndex == 2) {
                    if (ascendLevel <= 4) {
                        sum = 18;
                    } else if (ascendLevel <= 5) {
                        sum = 12;
                    } else if (ascendLevel > 5) {
                        sum = 0;
                    }
                }
                return sum;
            case 5:
                if (commIndex == 0) {
                    if (ascendLevel <= 0) {
                        sum = 15;
                    } else if (ascendLevel <= 1) {
                        sum = 12;
                    } else if (ascendLevel > 1) {
                        sum = 0;
                    }
                } else if (commIndex == 1) {
                    if (ascendLevel <= 2) {
                        sum = 22;
                    } else if (ascendLevel <= 3) {
                        sum = 14;
                    } else if (ascendLevel > 3) {
                        sum = 0;
                    }
                } else if (commIndex == 2) {
                    if (ascendLevel <= 4) {
                        sum = 27;
                    } else if (ascendLevel <= 5) {
                        sum = 18;
                    } else if (ascendLevel > 5) {
                        sum = 0;
                    }
                }
                return sum;
        }
    }
    return sum;
}

function sumClass(className) {
    let classValue = document.getElementsByClassName(className);
    let sum = 0;
    for (let classIndex = 0; classIndex < classValue.length; classIndex++) {
        sum += parseInt(classValue[classIndex].innerHTML);
    }
    return sum;
}