<template>
    <div class="img-wrapper">
        <div class="img-wrapper__half-circle">
            <div class="img-wrapper__half-circle__pyramids-wrapper">
                <div
                    class="img-wrapper__half-circle__pyramids-wrapper__pyramid1"
                ></div>
                <div
                    class="img-wrapper__half-circle__pyramids-wrapper__pyramid2"
                ></div>
                <div
                    class="img-wrapper__half-circle__pyramids-wrapper__pyramid3"
                ></div>
            </div>

            <div class="img-wrapper__half-circle__cloud-wrapper">
                <div class="clouds">
                    <div class="clouds__cloud1"></div>
                </div>

                <div class="clouds2">
                    <div class="clouds2__cloud2"></div>
                </div>

                <div class="clouds3">
                    <div class="clouds3__cloud3"></div>
                </div>

                <div class="clouds4">
                    <div class="clouds4__cloud4"></div>
                </div>
            </div>

            <div class="img-wrapper__half-circle__tree-wrapper">
                <div class="trees1">
                    <div class="trees1__tree">
                        <div class="trunk"></div>
                    </div>
                    <div class="tree-bottom"></div>
                </div>

                <div class="trees2">
                    <div class="trees2__tree">
                        <div class="trunk"></div>
                    </div>
                    <div class="tree-bottom"></div>
                </div>

                <div class="trees3">
                    <div class="trees3__tree">
                        <div class="trunk"></div>
                    </div>
                    <div class="tree-bottom"></div>
                </div>

                <div class="trees4">
                    <div class="trees4__tree">
                        <div class="trunk"></div>
                    </div>
                    <div class="tree-bottom"></div>
                </div>

                <div class="trees5">
                    <div class="trees5__tree">
                        <div class="trunk"></div>
                    </div>
                    <div class="tree-bottom"></div>
                </div>
            </div>

            <div class="img-wrapper__half-circle__birds-wrapper">
                <div class="img-wrapper__half-circle__birds-wrapper__bird1">
                    <div class="bird"></div>
                </div>
                <div class="img-wrapper__half-circle__birds-wrapper__bird2">
                    <div class="bird"></div>
                </div>
                <div class="img-wrapper__half-circle__birds-wrapper__bird3">
                    <div class="bird"></div>
                </div>
                <div class="img-wrapper__half-circle__birds-wrapper__bird4">
                    <div class="bird"></div>
                </div>
                <div class="img-wrapper__half-circle__birds-wrapper__bird5">
                    <div class="bird"></div>
                </div>
            </div>

            <div class="img-wrapper__half-circle__sun"></div>
        </div>

        <div class="img-wrapper__roads">
            <div class="img-wrapper__roads__road1"></div>
            <div class="img-wrapper__roads__road2"></div>
            <div class="img-wrapper__roads__road3"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-wrapper {
    width: 400px;
    margin: 80px 0;

    &__half-circle {
        @include halfCircle(420px, 200px, 'top');
        display: flex;
        background-color: rgba(183, 194, 231, 0.358);
        position: relative;
        &::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            background-color: $dark-grey;
            left: 0;
            bottom: 0;
            z-index: 1000;
        }

        &__pyramids-wrapper {
            position: relative;
            align-self: flex-end;
            display: flex;
            align-items: flex-end;
            width: 400px;

            &::after {
                content: '';
                position: absolute;
                border-bottom: 90px solid #f1f5f8;
                border-right: 120px solid transparent;
                bottom: 1px;
                right: 105px;
                z-index: 100;
            }

            &__pyramid1 {
                @include pyramid(74px, 74px);
                z-index: 101;
            }

            &__pyramid2 {
                @include pyramid(120px, 118px);
                transform: translateX(-100px);
                z-index: 100;
            }

            &__pyramid3 {
                @include pyramid(94px, 92px);
                transform: translateX(-200px);
                z-index: 99;
            }
        }

        &__cloud-wrapper {
            .clouds {
                position: absolute;
                top: 100px;
                left: 40px;
                z-index: 111;
                &__cloud1 {
                    @include cloud(0.6);
                }
            }
            .clouds2 {
                position: absolute;
                top: 60px;
                left: 120px;
                z-index: 111;
                &__cloud2 {
                    @include cloud(1.1);
                }
            }
            .clouds3 {
                top: 20px;
                left: 200px;
                position: absolute;
                &__cloud3 {
                    @include cloud(0.7);
                }
            }
            .clouds4 {
                top: 100px;
                right: 10px;
                position: absolute;
                &__cloud4 {
                    @include cloud(0.8);
                }
            }
        }

        &__tree-wrapper {
            .trees1 {
                position: absolute;
                bottom: -10px;
                z-index: 999;
                transform: scale(0.6);
                left: 0;
                &__tree {
                    @include tree;
                }
                .tree-bottom {
                    @include halfCircle(43px, 21px, 'bottom');
                    border: 2px solid $dark-grey;
                    border-top: none;
                    position: relative;
                    background-color: white;
                    left: 0.5px;
                    top: -2px;
                }
            }
            .trees2 {
                position: absolute;
                bottom: -10px;
                left: 80px;
                z-index: 999;
                transform: scale(0.6);
                &__tree {
                    @include tree;
                }
                .tree-bottom {
                    @include halfCircle(43px, 21px, 'bottom');
                    border: 2px solid $dark-grey;
                    border-top: none;
                    position: relative;
                    background-color: white;
                    left: 0.5px;
                    top: -2px;
                }
            }
            .trees3 {
                position: absolute;
                bottom: -10px;
                left: 160px;
                z-index: 999;
                transform: scale(0.6);
                &__tree {
                    @include tree;
                }
                .tree-bottom {
                    @include halfCircle(43px, 21px, 'bottom');
                    border: 2px solid $dark-grey;
                    border-top: none;
                    position: relative;
                    background-color: white;
                    left: 0.5px;
                    top: -2px;
                }
            }
            .trees4 {
                position: absolute;
                bottom: -10px;
                left: 240px;
                z-index: 999;
                transform: scale(0.6);
                right: 0;
                &__tree {
                    @include tree;
                }
                .tree-bottom {
                    @include halfCircle(43px, 21px, 'bottom');
                    border: 2px solid $dark-grey;
                    border-top: none;
                    position: relative;
                    background-color: white;
                    left: 0.5px;
                    top: -2px;
                }
            }
            .trees5 {
                position: absolute;
                bottom: -10px;
                left: 300px;
                z-index: 999;
                transform: scale(0.6);
                right: 0;
                &__tree {
                    @include tree;
                }
                .tree-bottom {
                    @include halfCircle(43px, 21px, 'bottom');
                    border: 2px solid $dark-grey;
                    border-top: none;
                    position: relative;
                    background-color: white;
                    left: 0.5px;
                    top: -2px;
                }
            }
        }

        &__birds-wrapper {
            display: flex;
            &__bird1 {
                position: absolute;
                top: 120px;
                left: 90px;
                .bird {
                    @include bird(6px, 6px);
                }
            }

            &__bird2 {
                position: absolute;
                top: 80px;
                left: 90px;
                .bird {
                    @include bird(8px, 8px);
                }
            }

            &__bird3 {
                top: 100px;
                left: 120px;
                position: absolute;
                .bird {
                    @include bird(10px, 10px);
                }
            }

            &__bird4 {
                top: 70px;
                left: 220px;
                position: absolute;
                .bird {
                    @include bird(5px, 5px);
                }
            }

            &__bird5 {
                top: 100px;
                left: 350px;
                position: absolute;
                .bird {
                    @include bird(8px, 8px);
                }
            }
        }

        &__sun {
            @include circle(100px);
            background-color: rgba(68, 106, 150, 0.384);
            position: absolute;
            bottom: 50px;
            left: 60px;
            z-index: 0;
        }
    }

    &__roads {
        &__road1 {
            height: 1.5px;
            width: 100%;
            background-color: white;
            background-image: linear-gradient(
                to right,
                $dark-grey 5%,
                $dark-grey 7%,
                white 7%,
                white 9%,
                $dark-grey 9%,
                $dark-grey 11%,
                white 11%,
                white 17%,
                $dark-grey 17%,
                $dark-grey 25%,
                white 25%,
                white 27%,
                $dark-grey 27%,
                $dark-grey 34%,
                white 34%,
                white 49%,
                $dark-grey 49%,
                $dark-grey 52%,
                white 52%,
                white 62%,
                $dark-grey 62%,
                $dark-grey 72%,
                white 72%,
                white 80%,
                $dark-grey 80%,
                $dark-grey 82%,
                white 82%,
                white 86%,
                $dark-grey 86%
            );
            margin-top: 10px;
        }

        &__road2 {
            margin-top: 10px;
            height: 1.25px;
            width: 100%;
            background-color: white;
            background-image: linear-gradient(
                to right,
                white 1%,
                white 3%,
                $dark-grey 3%,
                $dark-grey 5%,
                white 5%,
                white 9%,
                $dark-grey 9%,
                $dark-grey 27%,
                white 27%,
                white 32%,
                $dark-grey 32%,
                $dark-grey 45%,
                white 45%,
                white 53%,
                $dark-grey 53%,
                $dark-grey 60%,
                white 60%,
                white 65%,
                $dark-grey 65%,
                $dark-grey 70%,
                white 70%,
                white 76%,
                $dark-grey 76%,
                $dark-grey 86%,
                white 85%,
                white 90%,
                $dark-grey 85%,
                $dark-grey 91%,
                white 91%,
                white 95%,
                $dark-grey 95%,
                $dark-grey 100%
            );
        }

        &__road3 {
            margin-top: 10px;
            height: 1.75px;
            width: 100%;
            background-color: white;
            background-image: linear-gradient(
                to right,
                white 1%,
                white 3%,
                $dark-grey 3%,
                $dark-grey 9%,
                white 9%,
                white 15%,
                $dark-grey 15%,
                $dark-grey 30%,
                white 30%,
                white 35%,
                $dark-grey 35%,
                $dark-grey 40%,
                white 40%,
                white 49%,
                $dark-grey 49%,
                $dark-grey 54%,
                white 54%,
                white 61%,
                $dark-grey 61%,
                $dark-grey 70%,
                white 70%,
                white 76%,
                $dark-grey 76%,
                $dark-grey 86%,
                white 85%,
                white 90%,
                $dark-grey 85%,
                $dark-grey 95%,
                white 91%
            );
        }
    }
}
</style>
