import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { Transactions } from '../Transactions'
import { Banks } from '../Transactions'

export default function Home() {
  const small = './assets/small.png'
  return (
    <SafeAreaView className='bg-[#2C14DD] h-full pb-24'>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View className='px-4 pt-5'>

          {/* Header section */}
      <View className='flex-row items-center justify-between'>
        <View>
            <Text className='text-white font-medium text-base leading-[19.36px] mr-2'>
                Hello {' '}
                <Text className='text-white font-bold text-base leading-[19.36px]' style={{fontFamily: 'Inter'}}>
                  John
                  </Text>
                </Text>
            <Text className='text-white text-xs leading-[18px] mt-0.5' style={{fontFamily: 'Inter'}}>
                Your finances are looking good
                </Text>
        </View>

        <View  className='flex-row items-center gap-2'>
            <View className='bg-[#2812C9] p-2 rounded-full'>
                <Text>
                <Ionicons name="notifications-outline" size={20} color="#978AF4" />
                  </Text>
            </View>
            <View className='bg-[#2812C9] p-2 rounded-full'>
                <Text>
                <Feather name="search" size={20} color="#978AF4" />
                </Text>
            </View>
        </View>      
      </View>

      {/*End of Header */}

      {/* The Body */}

      <View className='h-[335px] mt-10 px-3 pt-4 bg-[#2816A7] rounded-2xl'>
        <View className='flex-row'>
        <View className='bg-blue-200 w-[56px] h-[56px] rounded-full mx-auto'>
          <Image source={require('../assets/smalll.png')} className='my-auto mx-auto'/>
        </View>
        <View className='bg-[#2310B2] w-[30px] h-[30px] rounded-full shadow-2xl'>
          <Text className='text-center my-auto text-white'>
          <AntDesign name="right" size={14} color="#978AF4" />
            </Text>
        </View>
        </View>

        <View className='mx-auto items-center justify-center py-4'>
        <Text className='text-[#FAFCFF] font-normal text-xs leading-[18px] mt-0.5' style={{fontFamily: 'Inter'}}>
          Your available balance is
          </Text>
          <Text className='text-white font-bold text-[28px] leading-[32px] mt-1.5' style={{fontFamily: 'Inter'}}>
          N20,983
          </Text>
          <View className='w-[192px] mt-2'>
          <Text className='text-[#FAFCFF] text-center font-medium text-xs leading-[18px] mt-0.5 flex-wrap' style={{fontFamily: 'Inter'}}>
          By this time last month, you spent slightly higher (N22,719)
          </Text>
          </View>   
        </View>

        {
          Banks.map((bank) => (
            <View className='flex-row items-center justify-between px-3 mt-3'>
            <Text className='text-[#E5F0FF] font-medium text-xs leading-[18px]' style={{fontFamily: 'Inter'}}>
               {bank.bank}
             </Text>
             <Text className='text-[#FFFFFF] font-medium text-xs leading-[18px]' style={{fontFamily: 'Inter'}}>
             N{bank.amount}
             </Text>
            </View>
          ))
        }

      
       

      </View>


      <View className='flex-row items-center justify-between bg-[#2816A7] rounded-2xl mt-6 py-8 px-3'>
        <View className='bg-[#5844EE] w-[38px] h-[38px] rounded-xl'>
          <Text className='text-center my-auto'>
          <Ionicons name="settings-outline" size={24} color="white" />
          </Text>
        </View>

        <View className='mr-7'>
        <Text className='text-white font-bold text-sm leading-[19.36px]' style={{fontFamily: 'Inter'}}>
          Sort your transactions
          </Text>
          <Text className='text-white text-xs leading-[16.8px] mt-1 flex-wrap' style={{fontFamily: 'Inter'}}>
            Get points for sorting your transactions
            </Text>
        </View>

        <View className='bg-[#2310B2] w-[30px] h-[30px] rounded-full'>
          <Text className='text-center my-auto text-white'>
          <AntDesign name="right" size={16} color="#978AF4" />
            </Text>
        </View>
      </View>

      <View className='mt-6'>
      <Text className='text-[#C1B9F9] font-semibold text-xs leading-[16.8px]' style={{fontFamily: 'Inter'}}>
        My Budgets
        </Text>

        <View className='h-[194px] bg-[#432DEC] rounded-2xl border border-[#2C14DD0D] mt-4 pt-3 px-3 shadow-2xl'>
          <View className='flex-row justify-between items-center'>
          <Text className='text-white font-medium text-xs leading-[16.8px] mt-1' style={{fontFamily: 'Inter'}}>
            You have
            </Text>
            <View className='bg-[#2310B2] w-[30px] h-[30px] rounded-full'>
          <Text className='text-center my-auto text-white'>
          <AntDesign name="right" size={14} color="#978AF4" />
            </Text>
        </View>
          </View>

        <Text className='text-white font-bold text-[18px] leading-[38px]' style={{fontFamily: 'Inter'}}>
        N29,880
        </Text>

        <Text className='text-white font-medium text-xs leading-[24px]' style={{fontFamily: 'Inter'}}>
        Left out of N80,888 budgeted
        </Text>

        <View className='w-full border mt-4'>
          <View className='w-[70%] bg-[#32FC65] rounded-l-md border border-[#32FC65] py-[0.4px]'></View>
        </View>

        <Text className='text-white font-medium text-xs leading-[18px] mt-4' style={{fontFamily: 'Inter'}}>
         😱 Sapa go soon catch you bros, calm down!!
        </Text>
        </View>
      </View>

      <View className='mt-7'>
      <Text className='text-[#C1B9F9] font-semibold text-xs leading-[16.8px]' style={{fontFamily: 'Inter'}}>
        Transactions
        </Text>

        <View  className='h-[229px] bg-[#432DEC] rounded-2xl border border-[#2C14DD0D] mt-4 pt-3 px-3 mb-10'>
        <View className='flex-row justify-between items-center'>
          <Text className='text-white font-semibold text-xs leading-[16.8px] mt-1' style={{fontFamily: 'Inter'}}>
          Recent Transactions
            </Text>

            <View className='bg-[#2310B2] w-[30px] h-[30px] rounded-full shadow-2xl'>
          <Text className='text-center my-auto text-white'>
          <AntDesign name="right" size={14} color="#978AF4" />
            </Text>
        </View>
          </View>

            {
              Transactions.map((transaction) => (

            <View className='flex-row items-center justify-between mt-2 mb-2'>
                <View className='flex-row items-center gap-3.5'>
                    <View className='w-[36px] h-[36px] rounded-full bg-white'>
                      <Text className='text-center font-semibold text-sm my-auto text-[#005CEE]'>{transaction.initials}</Text>
                    </View>
                    <View>
                    <Text className='text-white font-medium text-base leading-[19.36px] mr-2 mb-1'>
                      {transaction.name}
                      </Text>
                      <Text className='text-[#CECCFF] font-normal text-xs leading-[18px] mt-0.5' style={{fontFamily: 'Inter'}}>
                       {transaction.bank} {transaction.time}
                      </Text>
                    </View>       
                </View>
                <Text  style={{ color: transaction.amount.startsWith('+') ? '#05EF40' : 'white' }}>
                  {transaction.amount}
                  </Text>
              </View>
              ))
            }
          


        </View>
      </View>

    </View>  
    </ScrollView>
    </SafeAreaView>
  )
}